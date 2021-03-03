import React, { ReactElement } from 'react';
import Image from 'next/image';
import styles from './home.module.scss';

const HomePage = (): ReactElement => {
    return (
        <div className={styles.homepage}>
            <h1>大家好，我叫真你呀，我很高興認識你</h1>
            <p>今天我叫你們漢語</p>
        </div>
    );
};

export default HomePage;
