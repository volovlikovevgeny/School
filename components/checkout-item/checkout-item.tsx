import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearItemFromCart, removeItem, toggleModalHidden } from '../../redux/card/actions/actions';
import Modal from '../modal/modal';
import styles from './checkout-item.module.scss';

interface ProductItemImg {
    public_id: string;
    url: string;
}
interface IProps {
    cartItem: {
        quantity?: number;
        category?: string;
        checked?: boolean;
        content?: string;
        description?: string;
        images?: ProductItemImg[];
        inStock?: number;
        price?: number;
        sold?: number;
        title?: string;
        _id?: string;
    }
}

const CheckoutItem = ({ cartItem }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const { title, quantity, price, images, inStock } = cartItem;
    return (
        <div className={styles.checkout_item}>
            <div className={styles.image_container}>
                <img src={images[0].url} alt='item' />
            </div>
            <div className={styles.name}>
                <span>{title}</span>
                <span>in Stock: <span style={{ color: 'red' }}>{inStock}</span></span>
            </div>
            <span className={styles.quantity}>
                <span
                    className={styles.arrow}
                    onClick={() => dispatch(removeItem(cartItem))}
                >
                    &#10094;
                </span>
                <span className={styles.value}>{quantity}</span>
                <span
                    className={styles.arrow}
                    onClick={() => dispatch(addItem(cartItem))}
                >
                    &#10095;
               </span>
            </span>
            <span className={styles.price}>${price}</span>
            <div
                className={styles.remove_button}
                // onClick={() => dispatch(clearItemFromCart(cartItem))}
                onClick={() => dispatch(toggleModalHidden())}
            >
                &#10005;
        </div>
            <Modal title={title} />
        </div>
    );
};

export default CheckoutItem;
