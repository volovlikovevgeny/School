import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import { getData } from '../../utils/fetchData';
import { GetServerSideProps } from 'next';


type ProductIdType = {
    product: {

    }
}

const DetailProduct = ({ product }: ProductIdType): ReactElement => {
    const [productInfo, setProductInfo] = useState(product);
    

    return (
        <div>
            <Head>
                <title>Detail Product</title>
            </Head>
            <h1>Detail</h1>
        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async ({ params: { id } }) => {

    const res = await getData(`product/${id}`);

    return { props: { product: res.product } };
};


export default DetailProduct;
