import React, { ReactElement } from 'react';
import Cookie from 'js-cookie';
import { addUser } from '../../redux/user/actions/actions';
import { useDispatch } from 'react-redux';
import styles from './user-dropdown.module.scss';

interface IProps {
    user: {
        token: string;
        avatar: string
        email: string;
        name: string;
        role: string;
        root: boolean;
    }
}

const DropDown = ({ user }: IProps): ReactElement => {

    const { avatar, name } = user.user;

    const dispatch = useDispatch();

    const handleLogout = () => {
        Cookie.remove('refreshToken', {
            path: 'api/auth/accessToken',
        });

        localStorage.removeItem('firstLogin');

        dispatch(addUser(null));
        dispatch({ type: 'NOTIFY', payload: { success: 'Logged Out!' } });
    };

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_header}>
                <a className={styles.dropbtn}>{name}</a>
                <img style=
                    {{
                        borderRadius: '50%', width: '25px', height: '25px',
                    }} src={avatar} alt='avatar' />
            </div>

            <div className={styles.dropdown_content}>
                <a href="#">Profile</a>
                <a onClick={() => {
                    handleLogout();
                }
                }>Sign Out </a>
            </div>
        </div>
    );
};

export default DropDown;
