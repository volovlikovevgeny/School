import Head from 'next/head';
import React, { ReactElement } from 'react';
import ProductItem from '../components/product-item/product-item';
import { getData } from '../utils/fetchData';
import { GetServerSideProps } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import styles from '../styles/home.module.scss';

const Home = ({ products }: AppProps): ReactElement => {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className={styles.products}>
        {
          products.length === 0
            ? <h2>No Products Found</h2>
            : products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
        }
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const res = await getData('product');

  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
};

export default Home;
