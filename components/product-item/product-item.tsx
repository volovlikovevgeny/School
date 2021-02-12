import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './product-item.module.scss';

type Images = {
    images: {
        url: string
    }[]
}

interface ProductInterface {
    product: {
        images: Images,
        title: string,
        price: number,
        inStock: number,
        description: string,
        _id: string
    }
}

const ProductItem = ({ product }: ProductInterface): ReactElement => {
    const { images, title, price, inStock, description } = product;

    const userLink = () => {
        return (
            <>
                <Link href={`product/${product._id}`}><a className={styles.btn}>View</a></Link>
                <Link href={`product/${product._id}`}><a className={styles.btn}>Buy</a></Link>
               
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
                        {userLink()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
