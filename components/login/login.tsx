import React, { FormEvent, ReactElement, useState } from 'react';
import FormInput from '../form-input/form-input';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { postData } from '../../utils/fetchData';
import { addNotifyAction } from '../../redux/notify/actions/actions';
import styles from './login.module.scss';
import { addUser } from '../../redux/user/actions/actions';

const Login = (): ReactElement => {

    const dispatch = useDispatch();

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

        dispatch(addUser(res));

        console.log(res);

    };

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
