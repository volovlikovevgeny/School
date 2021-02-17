import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { valid } from '../../utils/valid';
import { useRouter } from 'next/router';
import { postData } from '../../utils/fetchData';
import Notify from '../notify/notify';
import { useTypedSelector } from '../../redux/notify/typedSelectors';

import styles from './register.module.scss';

interface Ivalue {
    [key: string]: string | number | symbol 
}

const Register = (): ReactElement => {
    const dispatch = useDispatch();
    const router = useRouter();

    const initialState = { name: '', email: '', password: '', cf_password: '' };
    const [userData, setUserData] = useState(initialState);
    const { name, email, password, cf_password } = userData;
    const { currentUser } = useTypedSelector(state => state.user);

    useEffect(() => {
        if (currentUser !== null) {
            router.push('/');
        }
    }, [currentUser]);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value }: Ivalue = e.target;
        setUserData({ ...userData, [name]: value });
        dispatch({ type: 'NOTIFY', payload: {} });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, password, cf_password } = userData;
        const errMsg = valid(name, email, password, cf_password);
        if (errMsg) {
            return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });
        }

        dispatch({ type: 'NOTIFY', payload: { loading: true } });

        const res = await postData('auth/register', userData);

        console.log(res);
        
        if (res.err) {
            return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
        }

        dispatch({ type: 'NOTIFY', payload: { success: res.msg } });

        setUserData(initialState);

        setTimeout(() => {
            dispatch({ type: 'NOTIFY', payload: {} });
            router.push('/signin');
        }, 1000);

    };

    return (
        <div className={styles.login_page}>
            <form onSubmit={handleSubmit}>
                <div className={styles.form_header}>
                    <h2>Register</h2>
                    <Notify />
                </div>
                <input type="text" value={name} name="name" placeholder="Name" onChange={handleChange} />
                <input type="email" value={email} name="email" placeholder="Email" onChange={handleChange} />

                <input type="password" value={password} name="password" autoComplete="on" placeholder="Password" onChange={handleChange} />

                <input type="password" value={cf_password} name="cf_password" autoComplete="on" placeholder="Confirm password" onChange={handleChange} />

                <div className={styles.row}>
                    <button type="submit">Register</button>
                    <p onClick={() => router.push('/signin')}>Login</p>
                </div>
            </form>
        </div>
    );
};

export default Register;
