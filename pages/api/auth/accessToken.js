import { connectDb } from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../../../utils/generateToken';

connectDb();

export default async (req, res) => {
    try {
        const { refreshToken } = req.cookies;

        const rf_token = refreshToken;

        if (!rf_token) { return res.status(400).json({ err: 'Please login now!' }); }

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);

        if (!result) { return res.status(400).json({ err: 'You token is incorrect or has inspired' }); }

        const user = await Users.findById(result.id);

        const access_token = createAccessToken({ id: user._id });

        if (!user) {
            return res.status(400).json({ err: 'User does not exist.' });
        }

        res.json({
            access_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root,
            },
        });

    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
};
