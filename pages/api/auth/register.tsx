import { connectDB } from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import { valid } from '../../../utils/valid';
import bcrypt from 'bcrypt';

connectDB();

export default async (req: { method: string; }, res: any) => {
    switch (req.method) {
        case "POST":
            await register(req, res);
            break;

        default:
            return res.json({ msg: 'Hello Get response' });
    }
};

const register = async (req, res) => {
    try {
        const { name, email, password, cf_password } = req.body;
        const errMessage = valid(name, email, password, cf_password);

        if (errMessage) {
            return res.status(400).json({ err: errMessage });
        }

        const user = await Users.findOne({ email });

        if (user) {
            return res.status(400).json({ err: 'This email is already taken.' });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = new Users({
            name, email, password: passwordHash, cf_password,
        });

        console.log(newUser);

        await newUser.save();
        res.json({ msg: "Register Success!" });

    } catch (err) {
        return res.status(500).json({ err: err.msg });
    }
};
