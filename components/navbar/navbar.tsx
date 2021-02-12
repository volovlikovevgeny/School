import React, { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import DropDown from '../dropdown/dropdown';
import RsDropDown from '../dropdown/rs-dropdown';
import { useTypedSelector } from '../../redux/notify/typedSelectors';
import styles from './navbar.module.scss';

function Navbar(): ReactElement {
    const router = useRouter();
    const isActive = (r: string) => {
        if (r === router.pathname) {
            return 'active';
        } else {
            return "";
        }
    };

    const { currentUser } = useTypedSelector(state => state.user);

    return (
        <nav className={styles.header}>
            <div className={styles.menu_bar}>
                Open
            </div>

            <Link href='/'><div className={styles.logo}><a>It School</a></div></Link>

            <ul>
            <RsDropDown title={'Lessons'} />
                <Link href='/cart'><li><a className={isActive('/cart')} >Cart</a></li></Link>
                {
                    currentUser
                        ?
                        <DropDown currentUser={currentUser} />
                        :
                        <Link href='/signin'><li><a className={isActive('/signin')}>Sign In &#9094; </a></li></Link>
                }

            </ul>

            <div className={styles.menu_bar}>
                Close
            </div>
        </nav>
    );
}

export default Navbar;
