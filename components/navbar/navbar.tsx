import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import DropDown from '../dropdown/dropdown';
import Image from 'next/image';
import ShoppingIcon from '../shopping-icon/shopping-icon';

const NavBar = (): ReactElement => {
    const [toggle, setToggle] = useState<boolean>(false);
    const { user } = useTypedSelector(state => state.user);

    const menuItems = [
        { item: 'Home', link: '/' },
        { item: 'Card', link: '/card' },
        { item: 'Checkout', link: '/checkout' },
        // { item: 'Sign In', link: '/signin' },
    ];

    const toggleMenu = () => {
        setToggle(!toggle);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.nav_items}>
                <div className={styles.logo}>
                    <li><Link href='/'>Logotype</Link></li>
                </div>
                <ul className={styles.menu_items} style={toggle ? { left: '0' } : null} >
                    {menuItems.map(({ link, item }, index) =>
                        <li onClick={() =>
                            setToggle(false)} key={index}><Link href={`${link}`}>{item}</Link>
                        </li>)}

                    {
                        user
                            ?
                            <li style={{ position: "relative" }}><DropDown user={user} /></li>
                            :
                            <li onClick={() => setToggle(false)}> <Link href='/signin'>Log In</Link></li>
                    }
                    <ShoppingIcon/>
                </ul>
                <div className={styles.menu_btn} onClick={toggleMenu}>
                    {toggle ? <span>X</span> : <span>☰</span>}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
