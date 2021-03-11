import React, { ReactElement } from 'react';

import styles from './companies.module.scss';

const Companies = (): ReactElement => {
    return (
        <div className={styles.companies_container}>
            <div className={styles.container_header}>
                <p>
                    Join 400,000+ Zero To Mastery students,
                    getting hired by some of the best companies around the world:
                </p>
            </div>
            <div className={styles.container_bottom}>
                Images
            </div>
        </div>
    );
};

export default Companies;
