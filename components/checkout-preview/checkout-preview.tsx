import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useTypedSelector } from '../../redux/notify/typedSelectors';
import CheckoutItem from '../checkout-item/checkout-item';
import CustomButton from '../custombtn/custombtn';
import { selectCartTotal } from '../../redux/cart/selectors';

import styles from './checkout-preview.module.scss';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

interface CheckoutType {
    total: number
}

const CheckoutPreview = ({ total }: CheckoutType): ReactElement => {
    const router = useRouter();

    const dispatch = useDispatch();

    const { currentUser } = useTypedSelector(state => state.user);

    const clickHandler = () => {
        dispatch({ type: 'NOTIFY', payload: { error: 'You have to login first' } });
        currentUser ? '' : router.push('/signin');
    };

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

            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem._id} cartItem={cartItem} />
                ))
            }

            <div className={styles.payinfo}>
                <form>
                    <h1>Shipping</h1>
                    <label>Address</label>
                    <input name='address' type="text" />
                    <label>Mobile</label>
                    <input type="text" />
                </form>
                <div className={styles.total}>
                    <p>TOTAL :${total}</p>

                    <div onClick={clickHandler}>
                        <CustomButton>Proceed with Checkout</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = () => createStructuredSelector({
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPreview);
