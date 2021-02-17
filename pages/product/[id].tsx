import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import { getData } from '../../utils/fetchData';
import { GetServerSideProps } from 'next';

import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cart/actions';

import styles from './product.module.scss';
import CustomButton from '../../components/custombtn/custombtn';
import { useTypedSelector } from '../../redux/notify/typedSelectors';

type ProductIdType = {
    product: {
        title: string,
        price: number,
        inStock: number,
        sold: number,
        description: string,
        content: string,
        images: {
            url: string
        }[]
    }
}

const DetailProduct = ({ product }: ProductIdType): ReactElement => {

    const dispatch = useDispatch();

    const { notify } = useTypedSelector(state => state.notify);

    const [tab, setTab] = useState<number>(0);

    const isActive = (index: number): string => {
        if (tab === index) {
            return styles.active;
        } else {
            return "";
        }
    };

    return (
        <div>
            <Head>
                <title>Detail Product</title>
            </Head>

            <div className={styles.detail}>
                <div className={styles.column_left}>

                    <img src={product.images[tab].url} alt="photo" />

                    <div className={styles.row_container}  >
                        {
                            product.images.map((images, index) => (
                                <img className={`${isActive(index)}`} onClick={() => setTab(index)} key={index} src={images.url} alt="product" />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.box_detail}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <div className={styles.price}>${product.price}</div>
                    <div className={styles.row}>

                        {
                            product.inStock > 0
                                ? <span className={styles.row_details}>In Stock: {product.inStock}</span>
                                : <span className={styles.row_details_error}>{notify.error}</span>
                        }

                        <span className={styles.row_details}> Sold:{product.sold}</span>
                    </div>
                    <p>{product.description}</p>
                    <p>{product.content}</p>

                    <div className={styles.bottom_items}>
                        <div onClick={() => dispatch(addCartItem(product))}>
                            <CustomButton>Buy</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params: { id } }) => {

    const res = await getData(`product/${id}`);

    return { props: { product: res.product } };
};

export default DetailProduct;
