import React, { ReactElement } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import styles from './checkout.module.scss';

const CheckoutPage = (): ReactElement => {
    const { cartItems } = useTypedSelector(state => state.cart);
    return (
        <div className={styles.checkout_page}>
            <div className={styles.checkout_header}>
                <div className={styles.header_block}>
                    <span>Product</span>
                </div>
                <div className={styles.header_block}>
                    <span>Description</span>
                </div>
                <div className={styles.header_block}>
                    <span>Quantity</span>
                </div>
                <div className={styles.header_block}>
                    <span>Price</span>
                </div>
                <div className={styles.header_block}>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem._id} cartItem={cartItem} />
            ))}
        </div>
    );
};

export default CheckoutPage;
