import React, { ReactElement, ReactNode } from 'react';
import styles from './custom-button.module.scss';

interface IProps {
    children: ReactNode;
}

const CustomButton = ({ children }: IProps): ReactElement => {
    return (
        <button
            className={styles.btn}>
            {children}
        </button>
    );
};

export default CustomButton;
