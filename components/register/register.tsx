import React, { FormEvent, ReactElement, useState } from 'react';
import FormInput from '../form-input/form-input';
import Link from 'next/link';
import { valid } from '../../utils/valid';
import styles from './register.module.scss';
import { postData } from '../../utils/fetchData';
import { addNotifyAction } from '../../redux/notify/actions/actions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Register = (): ReactElement => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [user, setUser] = useState<{
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }>({ name: '', email: '', password: '', confirmPassword: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const registerSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const { name, email, password, confirmPassword } = user;

        const errMsg = valid(name, email, password, confirmPassword);

        if (errMsg) {
            dispatch(addNotifyAction({ error: errMsg }));
        }

        dispatch(addNotifyAction({ loading: true }));

        const res = await postData('auth/register', user);

        if (res.err) {
            dispatch(addNotifyAction({ error: res.err }));
            return;
        }

        dispatch(addNotifyAction({ success: res.msg }));
        setUser({ name: '', email: '', password: '', confirmPassword: '' });

        setTimeout(() => {
            dispatch({ type: 'NOTIFY', payload: {} });
            router.push('/');
        }, 1000);
    };

    return (
        <div className={styles.register_page}>
            <h2 className={styles.title}>Register</h2>
            <form onSubmit={registerSubmit}>
                <FormInput
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={user.name}
                    handleChange={handleChange}
                    required
                />
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
                <FormInput
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm password'
                    value={user.confirmPassword}
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
export default Register;
