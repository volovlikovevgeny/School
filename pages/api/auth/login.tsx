import { connectDb } from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

connectDb();

export default async (req: NextApiRequest, res: NextApiResponse):Promise<void> => {
    switch (req.method) {
        case 'POST':
            await login(req, res);
    }
};

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) { return res.json({ err: 'Invalid Username or Password' }); }

        res.json({
            msg: 'Login Success',
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root,
            },
        });

        if (!user) { return res.status(400).json({ err: 'This user doesn`t exist' }); }

    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
};
