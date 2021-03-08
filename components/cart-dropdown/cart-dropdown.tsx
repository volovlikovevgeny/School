import React, { ReactElement } from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import { useRouter } from 'next/router';
import styles from './cart-dropdown.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/card/actions/actions';

const CartDropdown = (): ReactElement => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { cartItems } = useTypedSelector(state => state.cart);

    return (
        <div className={styles.cart_dropdown}>
            <div className={styles.cart_items}>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem._id} item={cartItem} />
                    ))
                ) : (
                    <span className={styles.empty_message}>Your cart is empty</span>
                )}
            </div>
            <div
                style={{ marginTop: '15px' }}
                onClick={() => {
                    router.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div >
        </div>
    );
};

export default CartDropdown;
