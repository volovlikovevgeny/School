import React, { ReactElement } from 'react';
import styles from './cart-dropdown.module.scss';

const CartDropdown = ():ReactElement => {
    return (
        <div className={styles.cart_dropdown}>
            <div className={styles.cart_items}>
                <div className={styles.button}>
                    <button>Go to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartDropdown;
