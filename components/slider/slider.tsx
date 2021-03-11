import React, { ReactElement } from 'react';
import styles from './slider.module.scss';
import CustomButton from '../custom-button/custom-button';

const Slider = (): ReactElement => {
    return (
        <div className={styles.header}>
            <div className={styles.column_left}>
                <h1>Learn to code. get hired.</h1>
                <p>
                    Whether you are just starting to learn to code or
                    want to advance your skills, Zero To Mastery
                    Academy will teach you React, JavaScript, Python,
                    CSS and more to help you advance your career,get hired and succeed at the top companies in the world.
                </p>
                <div className={styles.btn}>
                    <CustomButton>Join the academy</CustomButton>
                    <CustomButton>see all courses</CustomButton>
                </div>
            </div>
            <div className={styles.column_right} />
        </div>
    );
};

export default Slider;
