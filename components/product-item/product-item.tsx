import React, { ReactElement } from 'react';
import styles from './product-item.module.scss';

const ProductItem = ({ product }): ReactElement => {
    const { images, title, price, inStock, description } = product;

    return ( 
        <>
            <div className={styles.card}>
                <div className={styles.card_img_top}>
                    <img src={images[0].url} alt="photo" />
                </div>

                <div className={styles.card_body}>

                    <h5 className={styles.card_title}>{title}</h5>

                    <div className={styles.details}>

                        <h6>${price}</h6>
                        {
                            inStock > 0
                                ? <h6>In Stock: {inStock}</h6>
                                : <h6>Out Stock</h6>
                        }

                    </div>

                    <p className={styles.card_text}>{description}</p>

                    {/* Think about buttons */}
                    <div className={styles.details_btn}>
                        <a className={styles.btn}>View</a>
                        <a className={styles.btn}>Buy</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
