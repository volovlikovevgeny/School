import React, { ReactElement } from 'react';
import Head from 'next/head';
import { getData } from '../../utils/fetchData';

const DetailProduct = ({product}): ReactElement => {
    console.log(product);
    
    return (
        <div>
            <Head>
                <title>Detail Product</title>
            </Head>
            <h1>Detail</h1>
        </div>
    );
};


export const getServerSideProps = async ({ params: { id } }) => {
    const res = await getData(`product/${id}`);

    return {
        props: {
            product: res.product,
        },
    };
};


export default DetailProduct;
