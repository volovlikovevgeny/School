import React, { ReactElement, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../utils/fetchData';
import { setCurrentUser } from '../../redux/user/user.actions';
import NavBar from '../navbar/navbar';

import styles from './layout.module.scss';


interface Layout {
    children?: ReactNode,

}

const Layout = ({ children}: Layout): ReactElement => {
    return (
        <div className={styles.container}>
            <NavBar />
            {children}
        </div>
    );
};


export default Layout;
