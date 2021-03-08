import { connectDb } from '../../../utils/connectDB';
import Products from '../../../models/productModal';
import { NextApiRequest, NextApiResponse } from 'next';

connectDb();

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    switch (req.method) {
        case 'GET':
            return await getProducts(req, res);

        default:
            return res.json({ msg: 'Hello Product' });
    }
};

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const products = await Products.find();

        res.json({
            status: 'success',
            result: products.length,
            products,
        });

    } catch (err) {
        res.json({ err: err.message });
    }
};
