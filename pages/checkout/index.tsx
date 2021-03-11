import React, { ReactElement, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { selectCartTotal } from '../../redux/card/selector';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import Head from 'next/head';
import styles from './checkout.module.scss';
import StripeBtn from '../../components/paypal-btn/paypal-btn';
import FormInput from '../../components/form-input/form-input';
import { addNotifyAction } from '../../redux/notify/actions/actions';
import CustomButton from '../../components/custom-button/custom-button';

interface IProps {
    total: number;
}

const CheckoutPage = ({ total }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const { cartItems } = useTypedSelector(state => state.cart);

    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [payment, setPayment] = useState(false);

    const handlePayment = () => {
        if (!address || !mobile) {
            return dispatch(addNotifyAction({ error: 'Please add your address and mobile.' }));
        }
        setPayment(true);
    };

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
                    <FormInput
                        type='address'
                        name='address'
                        placeholder='Address'
                        value={address}
                        handleChange={e => setAddress(e.target.value)}
                        required
                    />
                    <label>Mobile</label>
                    <FormInput
                        type='mobile'
                        name='mobile'
                        placeholder='Phone number'
                        value={mobile}
                        handleChange={e => setMobile(e.target.value)}
                        required
                    />
                </form>
                <div className={styles.total}>
                    <p>TOTAL :${total}</p>
                    <div className={styles.test_warning}>
                        *Please use the following test credit card for payments*
                    <br />
                        4242 4242 4242 4242 - Exp: 12/22 - CVV: 123
                </div>
                    {
                        payment
                            ? <StripeBtn />
                            : <div onClick={handlePayment}>
                                <CustomButton>Proceed with checkout</CustomButton>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = () => createStructuredSelector({
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
