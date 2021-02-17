import React, { ReactElement, ReactNode } from 'react';
import NavBar from '../navbar/navbar';
import ShopIcon from '../shop-icon/shop-icon';
import styles from './layout.module.scss';

interface Layout {
    children?: ReactNode,
}

const Layout = ({ children }: Layout): ReactElement => {
    return (
        <React.Fragment>
            <div className={styles.container}>
            <NavBar />
                {children}

                <div className={styles.sticky_bag}><ShopIcon/></div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
