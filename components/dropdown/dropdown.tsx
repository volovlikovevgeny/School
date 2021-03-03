import React, { ReactElement } from 'react';
import styles from './dropdown.module.scss';

const DropDown = (): ReactElement => {
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_content}>Links</div>
        </div>
    );
};

export default DropDown;
