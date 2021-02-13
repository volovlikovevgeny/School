import React, { ReactElement, ReactNode} from 'react';
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
