import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { getData } from '../../utils/fetchData';
import { addItem } from '../../redux/card/actions/actions';
import { useDispatch } from 'react-redux';
import styles from './detail.module.scss';

interface ProductItemImg {
  public_id: string;
  url: string;
}

interface IProps {
  product: {
    category: string;
    checked: boolean;
    content: string;
    description: string;
    images: ProductItemImg[];
    inStock: number;
    price: number;
    sold: number;
    title: string;
    _id: string;
  }
}

const Product = ({ product }: IProps): ReactElement => {

  const dispatch = useDispatch();

  const [tab, setTab] = useState<number>(0);

  const isActive = (index: number): string => {
    if (tab === index) {
      return styles.active;
    }
    return;
  };

  const { error } = useTypedSelector(state => state.notify.notify);

  const { title, images, price, inStock, sold, description, content } = product;
  return (
    <React.Fragment>
      <Head>
        <title>Details Product</title>
      </Head>

      <div className={styles.detail_page}>
        <div className={styles.column_left}>
          <img src={product.images[tab].url} alt="product" />
          <div className={styles.image_box}>
            {
              images.map((img, index) =>
                <img
                  className={`${isActive(index)}`}
                  onClick={() => setTab(index)}
                  src={img.url}
                  alt={'item'}
                  key={index}
                />)
            }
          </div>
        </div>
        <div className={styles.column_right}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.price}>${price}</div>
          <div className={styles.row}>
            {
              inStock > 0
                ? <span className={styles.details}>In Stock:{inStock}</span>
                : <span className={styles.details_error}>{error}</span>
            }
            <span className={styles.details}>Sold:{sold}</span>
          </div>
          <p>{description}</p>
          <p>{content}</p>

          <div className={styles.detail_bottom}>
            <button
              className='btn'
              style={{ width: '20%' }}
              onClick={() => dispatch(addItem(product))}
            >Buy</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params: { id } }) => {

  const res = await getData(`product/${id}`);
  return {
    props: { product: res.product },
  };
};

export default Product;
