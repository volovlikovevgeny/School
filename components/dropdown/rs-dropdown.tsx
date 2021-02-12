import React, { ReactElement } from 'react';
import styles from './dropdown.module.scss';



const RsDropDown = ({title}): ReactElement => {
return (
    <li className={styles.dropdown}>
            <div className={styles.dropdown_header}>
                <a className={styles.dropbtn}>{title}</a>
            </div>

            <div className={styles.dropdown_content}>
                <a href="#">Lesson 1</a>
                <a href="#">Lesson 2</a>
                <a href="#">Lesson 3</a>
                <a href="#">Lesson 4</a>
                <a href="#">Lesson 5</a>
                <a href="#">Lesson 6</a>
                <a href="#">Lesson 7</a>
                <a href="#">Lesson 8</a>
                <a href="#">Lesson 9</a>
                <a href="#">Lesson 10</a>
                <a href="#">Lesson 11</a>

            </div>
        </li>
    );
};


export default RsDropDown;
