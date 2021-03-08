import { connectDb } from '../../../utils/connectDB';
import Products from '../../../models/productModal';
import { NextApiRequest, NextApiResponse } from 'next';

connectDb();

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    switch (req.method) {
        case 'GET':
            return await getData(req, res);

        default:
            return res.json({ msg: 'Hello Product' });
    }
};

const getData = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query;
        const product = await Products.findById(id);

        res.json({
            product,
        });

    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};
