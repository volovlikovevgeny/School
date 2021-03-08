import React, { ReactElement } from 'react';
import styles from './cart-item.module.scss';

interface IProps {
    item: {
        category?: string;
        checked?: boolean;
        content?: string;
        images?: {
            public_id?: string;
            url?: string;
        }[]
        inStock?: number;
        price?: number;
        quantity?: number;
        sold?: number;
        title?: string;
        _id?: string;
    }
}

const CartItem = ({ item }: IProps): ReactElement => {
    const { images, price, title, quantity } = item;

    return (
        <div className={styles.cart_item}>
            <img src={images[0].url} alt='item' />
            <div className={styles.item_details}>
                <span className={styles.title}>{title}</span>
                <span className={styles.price}>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
