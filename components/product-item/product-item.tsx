import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cart/actions';
import Link from 'next/link';
import styles from './product-item.module.scss';
import { useTypedSelector } from '../../redux/notify/typedSelectors';

interface ProductInterface {
    product: {
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

const ProductItem = ({ product }: ProductInterface): ReactElement => {
    const { images, title, price, inStock, description } = product;

    const { notify } = useTypedSelector(state => state.notify);

    const dispatch = useDispatch();

    const userLink = () => {
        return (
            <>
                <Link href={`product/${product._id}`}><a className={styles.btn}>View</a></Link>
                <button onClick={() => dispatch(addCartItem(product))} className={styles.btn}>Buy</button>
            </>
        );
    };

    return (
        <>
            <div className={styles.card}>

                <div className={styles.card_img_top}>
                    <img src={images[0].url} alt="photo" />
                </div>

                <div className={styles.card_body}>

                    <div className={styles.cart_header}>
                        <h5 className={styles.card_title}>{title}</h5>
                    </div>

                    <div className={styles.details}>

                        <h6>${price}</h6>
                        {
                            inStock > 0
                                ? <h6>In Stock: {inStock}</h6>
                                : notify.error
                                    ?
                                    <h6>This Product is out of stock.</h6>
                                    : <h6>Out Stock  </h6>
                        }

                    </div>

                    <p className={styles.card_text}>{description}</p>

                    <div className={styles.details_btn}>
                        {userLink()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
