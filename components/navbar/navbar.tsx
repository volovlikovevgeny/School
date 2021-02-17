import React, { ReactElement } from 'react';
import Link from 'next/link';
import DropDown from '../dropdown/dropdown';
import { useTypedSelector } from '../../redux/notify/typedSelectors';

import styles from './navbar.module.scss';

const Navbar = (): ReactElement => {

    const { currentUser } = useTypedSelector(state => state.user);

    return (
        <nav className={styles.header}>
            <Link href='/'><div className={styles.logo}><a>It School</a></div></Link>

            <ul>

                <Link href='/checkout'><li><a>Checkout</a></li></Link>
                {
                    currentUser
                        ?
                        <DropDown currentUser={currentUser} />
                        :
                        <Link href='/signin'><li><a>Sign In &#9094; </a></li></Link>
                }

            </ul>
        </nav>
    );
};

export default Navbar;
