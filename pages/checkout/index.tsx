import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { selectCartTotal } from '../../redux/card/selector';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import Head from 'next/head';
import styles from './checkout.module.scss';
import CustomButton from '../../components/custom-button/custom-button';

interface IProps {
    total: number;
}

const CheckoutPage = ({ total }: IProps): ReactElement => {
    console.log(total);
    const { cartItems } = useTypedSelector(state => state.cart);
    return (
        <div className={styles.checkout_page}>
            <Head>
                <title>
                    Checkout Page
                </title>
            </Head>
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
                <CheckoutItem
                    key={cartItem._id}
                    cartItem={cartItem}
                />
            ))}

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
                    <CustomButton>Proceed with Checkout</CustomButton>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = () => createStructuredSelector({
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
