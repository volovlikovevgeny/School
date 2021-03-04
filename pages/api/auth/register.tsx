import { connectDb } from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import { valid } from '../../../utils/valid';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

connectDb();

export default async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
    switch (req.method) {
        case 'POST':
            register(req, res);
            break;
        default:
            return res.json({ msg: 'Post response' });
    }
};

const register = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        const errMessage = valid(name, email, password, confirmPassword);

        if (errMessage) {
            return res.status(400).json({ err: errMessage });
        }

        const user = await Users.findOne({ email });

        if (user) {
            return res.status(400).json({ err: 'This email is already taken.' });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = new Users({
            name, email, password: passwordHash, confirmPassword,
        });

        console.log(newUser);

        await newUser.save();
        res.json({ msg: "Register Success!" });

    } catch (err) {
        return res.status(500).json({ err: err.msg });
    }
};
