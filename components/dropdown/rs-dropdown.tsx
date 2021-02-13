import React, { ReactElement } from 'react';
import styles from './dropdown.module.scss';

interface RsDropDown {
    title:string
} 

const RsDropDown = ({title}:RsDropDown): ReactElement => {
return (
    <li className={styles.dropdown}>
            <div className={styles.dropdown_header}>
                <a className={styles.dropbtn}>{title}</a>
            </div>

            <div className={styles.dropdown_content}>
                <a href="#">Lesson 1</a>
                <a href="#">Lesson 2</a>
            </div>
        </li>
    );
};


export default RsDropDown;
