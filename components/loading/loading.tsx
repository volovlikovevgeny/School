import React, { ReactElement } from 'react';
import styles from './loading.module.scss';

const LoadingSpinner = (): ReactElement => {
    return (
        <div className={styles.spinner_overlay}>
            <div className={styles.spinner_container}></div>
        </div>
    );
};

export default LoadingSpinner;

