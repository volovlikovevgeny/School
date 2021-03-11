import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import FormInput from '../form-input/form-input';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { getData, postData } from '../../utils/fetchData';
import { addNotifyAction } from '../../redux/notify/actions/actions';
import { addUser } from '../../redux/user/actions/actions';
import { useRouter } from 'next/router';
import styles from './login.module.scss';

const Login = (): ReactElement => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [submit, setSubmit] = useState(false);

    const [user, setUser] = useState<{
        email: string,
        password: string
    }>({ email: '', password: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const loginSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        dispatch(addNotifyAction({ loading: true }));

        const res = await postData('auth/login', user);

        if (res.err) {
            dispatch(addNotifyAction({ error: res.err }));
            return;
        }

        dispatch(addNotifyAction({ success: res.msg }));
        setUser({ email: '', password: '' });

        Cookies.set('refreshToken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7,
        });

        localStorage.setItem('firstLogin', (true).toString());

        setSubmit(true);
    };

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin');
        if (firstLogin) {
            getData('auth/accessToken').then(res => {
                if (res.err) {
                    localStorage.removeItem('firstLogin');
                    dispatch(addNotifyAction({ error: res.err }));
                    return;
                }

                dispatch(addUser({
                    token: res.access_token,
                    user: res.user,
                }));
            });
            setTimeout(() => {
                router.push('/');
                dispatch(addNotifyAction({}));
            }, 800);
        }

    }, [submit]);

    return (
        <div className={styles.login_page}>
            <h2 className={styles.title}>Login</h2>
            <form onSubmit={loginSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={user.email}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={user.password}
                    handleChange={handleChange}
                    required
                />
                <div className={styles.row}>
                    <button className={styles.form_button} type='submit'>Submit</button>
                    <Link href='/signup'>Register</Link>
                </div>
            </form>

        </div>
    );
};
export default Login;
