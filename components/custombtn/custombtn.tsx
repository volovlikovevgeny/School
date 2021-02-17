import React, { ReactElement, ReactNode } from 'react';
import styles from './custombtn.module.scss';

type ButtonType = {
    children?: ReactNode
}

const CustomButton = ({ children }: ButtonType): ReactElement => {
    return (
        <>
            <button className={styles.btn}>
                {children}
            </button>
        </>
    );
};

export default CustomButton;
