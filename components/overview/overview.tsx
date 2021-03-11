import React, { ReactElement } from 'react';
import Image from 'next/image';
import styles from './overview.module.scss';

const Overview = (): ReactElement => {
    return (

        <div className={styles.overview}>
            <h1 className={'title'}>
                WHAT YOU CAN GET BY JOINING ZERO TO MASTERY
            </h1>
            <div className={styles.overview_content}>
                <div className={styles.overview_left}>
                    <Image
                        src={'/overview_support-team.png'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={styles.overview_right}>
                    <h2>Learn to code, on your schedule</h2>
                    <p>
                        Our comprehensive courses have 400+ hours (and counting) of lessons available 24/7.
                        You’ll learn everything from beginner programming fundamentals to the most advanced concepts.
                    </p>
                </div>
            </div>
            <div style={{ flexDirection: 'row-reverse' }} className={styles.overview_content}>
                <div className={styles.overview_left}>
                    <Image
                        src={'/goal.png'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={styles.overview_right}>
                    <h2>Learn to code, on your schedule</h2>
                    <p>
                        Our comprehensive courses have 400+ hours (and counting) of lessons available 24/7.
                        You’ll learn everything from beginner programming fundamentals to the most advanced concepts.
                    </p>
                </div>
            </div>
            <div className={styles.overview_content}>
                <div className={styles.overview_left}>
                    <Image
                        src={'/meet.png'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={styles.overview_right}>
                    <h2>Learn to code, on your schedule</h2>
                    <p>
                        Our comprehensive courses have 400+ hours (and counting) of lessons available 24/7.
                        You’ll learn everything from beginner programming fundamentals to the most advanced concepts.
                    </p>
                </div>
            </div>
            <div style={{ flexDirection: 'row-reverse' }} className={styles.overview_content}>
                <div className={styles.overview_left}>
                    <Image
                        src={'/asset.png'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={styles.overview_right}>
                    <h2>Learn to code, on your schedule</h2>
                    <p>
                        Our comprehensive courses have 400+ hours (and counting) of lessons available 24/7.
                        You’ll learn everything from beginner programming fundamentals to the most advanced concepts.
                    </p>
                </div>
            </div>
            <div className={styles.overview_content}>
                <div className={styles.overview_left}>
                    <Image
                        src={'/soft.png'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={styles.overview_right}>
                    <h2>Learn to code, on your schedule</h2>
                    <p>
                        Our comprehensive courses have 400+ hours (and counting) of lessons available 24/7.
                        You’ll learn everything from beginner programming fundamentals to the most advanced concepts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
