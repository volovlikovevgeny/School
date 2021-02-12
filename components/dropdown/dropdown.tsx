import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';
import Cokkies from 'js-cookie';
import styles from './dropdown.module.scss';

interface CurrentUserProps {
    currentUser:{currentUser:{
        avatar:string,
        name:string
    }}
}

const DropDown = ({ currentUser: { currentUser }}:CurrentUserProps): ReactElement => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        Cokkies.remove('refreshtoken', {
            path: 'api/auth/accessToken',
        });

        localStorage.removeItem('firstLogin');

        dispatch(setCurrentUser(null));
        dispatch({ type: 'NOTIFY', payload: { success: 'Logged Out!' } });
    };

    return (
        <li className={styles.dropdown}>
            <div className={styles.dropdown_header}>
                <img style=
                    {{
                        borderRadius: '50%', width: '30px', height: '30px',
                    }} src={currentUser.avatar} alt='avatar' />
                <a className={styles.dropbtn}>{currentUser.name}</a>
            </div>

            <div className={styles.dropdown_content}>
                <a href="#">Profile</a>
                <a onClick={handleLogOut}
                >Sign Out </a>
            </div>
        </li>
    );
};


export default DropDown;
