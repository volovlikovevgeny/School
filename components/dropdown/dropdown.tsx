import React, { ReactElement } from 'react';
import Cookie from 'js-cookie';
import styles from './dropdown.module.scss';
import { addUser } from '../../redux/user/actions/actions';
import { useDispatch } from 'react-redux';

const DropDown = ({ user }): ReactElement => {

    console.log(user);
    
    const dispatch = useDispatch();

    const handleLogout = () => {
        Cookie.remove('refreshToken', {
            path: 'api/auth/accessToken',
        });

        localStorage.removeItem('firstLogin');

        dispatch(addUser(null));
        dispatch({ type: 'NOTIFY', payload: { success: 'Logged Out!' } });

        setTimeout(() => {
            dispatch({ type: 'NOTIFY', payload: {} });
        }, 700);
    };

    console.log(user);
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_header}>
                <a className={styles.dropbtn}>{user.user.name}</a>
                <img style=
                    {{
                        borderRadius: '50%', width: '30px', height: '30px',
                    }} src={user.user.avatar} alt='avatar' />
            </div>

            <div className={styles.dropdown_content}>
                <a href="#">Profile</a>
                <a onClick={() =>{
                    handleLogout();

                } 
                }>Sign Out </a>
            </div>
        </div>
    );
};

export default DropDown;
