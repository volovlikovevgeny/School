import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/actions';
import styles from './checkout-item.module.scss';

interface ItemInterface {
    cartItem: {
        category: string,
        checked: boolean,
        content: string,
        sold: number,
        images: {
            url: string,
            public_id: string
        }[],
        title: string,
        price: number,
        inStock: number,
        description: string,
        _id: string,
    }
}

const CheckoutItem = ({ cartItem }: ItemInterface): ReactElement => {
    const { images, price, title, inStock } = cartItem;

    const dispatch = useDispatch();

    const handleRemoveClick = () => {
        dispatch(clearItemFromCart(cartItem));
    };

    if (cartItem.length === 0) {
        return (
            <div className={styles.emptyCard}>
                <h1>You Card is Empty</h1>
            </div>
        );
    }

    return (
        <div className={styles.checkout_item}>
            <div className={styles.img_container}>
                <img src={images[0].url} alt="item" />
            </div>
            <span className={styles.name}>
                <div>{title}</div>
                <div>In Stock:
                    <span>
                        {inStock}
                    </span>
                </div>
            </span>

            <span className={styles.quantity}>
                <div className={styles.arrow}>&#10094;</div>
                <span className={styles.value}>0</span>
                <div className={styles.arrow}>&#10095;</div>
            </span>

            <span className={styles.price}>${price}</span>
            <div
                className={styles.remove_button}
                onClick={handleRemoveClick}
            >&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
