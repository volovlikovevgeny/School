import React, { ReactElement } from 'react';
import styles from './checkout-item.module.scss';

interface ProductItemImg {
    public_id: string;
    url: string;
}
interface IProps {
    cartItem: {
        quantity: number;
        category: string;
        checked: boolean;
        content: string;
        description: string;
        images: ProductItemImg[];
        inStock: number;
        price: number;
        sold: number;
        title: string;
        _id: string;
    }
}

const CheckoutItem = ({ cartItem }: IProps): ReactElement => {
    const { title, quantity, price, images } = cartItem;
    return (
        <div className={styles.checkout_item}>
            <div className={styles.image_container}>
                <img src={images[0].url} alt='item' />
            </div>
            <span className={styles.name}>{title}</span>
            <span className={styles.quantity}>
                <div className={styles.arrow} >
                    &#10094;
          </div>
                <span className={styles.value}>{quantity}</span>
                <div className={styles.arrow}>
                    &#10095;
          </div>
            </span>
            <span className={styles.price}>{price}</span>
            <div className={styles.remove_button}>
                &#10005;
        </div>
        </div>
    );
};

export default CheckoutItem;
