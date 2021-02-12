import React, { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import { postData } from '../../utils/fetchData';
import Notify from '../notify/notify';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

import styles from './login.module.scss';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../../redux/notify/typedSelectors';



interface Ivalue {
    [key: string]: string | number | symbol | any
}

const Login = (): ReactElement => {

    const { currentUser } = useTypedSelector(state => state.user);
    
    useEffect(() => {
        if(currentUser !== null ){
            router.push('/');
        }
    }, [currentUser]);

    const router = useRouter();

    const dispatch = useDispatch();

    const initialState = { email: '', password: '' };
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value }: Ivalue = e.target;
        setUserData({ ...userData, [name]: value });
        dispatch({ type: 'NOTIFY', payload: {} });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        dispatch({ type: 'NOTIFY', payload: { loading: true } });


        const res = await postData('auth/login', userData);


        if (res.err) {
            return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
        }

        dispatch({ type: 'NOTIFY', payload: { success: res.msg } });

        dispatch({
            type: 'SET_CURRENT_USER',
            payload: {
                token: res.access_token,
                currentUser: res.user,
            },
        });


        Cookies.set('refreshtoken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7,
        });

        localStorage.setItem('firstLogin', true);

    };

    return (
        <div className={styles.login_page}>
            <form onSubmit={handleSubmit}>
                <div className={styles.form_header}>
                    <h2>Login </h2>
                    <Notify />
                </div>
                <input type="email" value={email} name="email" required placeholder="Email" onChange={handleChange} />

                <input type="password" value={password} name="password" required autoComplete="on" placeholder="Password" onChange={handleChange} />

                <div className={styles.row}>
                    <button type="submit">Login</button>
                    <Link href="/signup">Register</Link>
                </div>
                <input type="checkbox" className={styles.checkbox} />Remember Me
            </form>
        </div>
    );
};

export default Login;
