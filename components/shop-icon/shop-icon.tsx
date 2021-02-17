
import React, { ReactElement } from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/selectors';
import Link from 'next/link';
import styles from './shop-icon.module.scss';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const ShopIcon = ({ itemCount }: AppProps): ReactElement => {
    return (
        <Link href='/checkout'>
            <div className={styles.shopping_container}>
                <div className={styles.shopping_img}>
                    <Image
                        src="/shop.jpg"
                        alt="bag"
                        width={80}
                        height={80}
                    />
                </div>
                <span className={styles.item_count_container}>{itemCount}</span>
            </div>
        </Link>
    );
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ShopIcon);
