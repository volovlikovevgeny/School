import React, { ReactElement, ReactNode } from 'react';
import styles from './custom-button.module.scss';

interface IProps {
    children: ReactNode;
    onClick?: () => void
}

const CustomButton = ({ children, onClick }: IProps): ReactElement => {
    return (
        <button
            className={styles.btn}>
            {children}
        </button>
    );
};

export default CustomButton;
