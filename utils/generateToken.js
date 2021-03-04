import jwt from 'jsonwebtoken';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createAccessToken = (payload) => {
    console.log(process.env.ACCESS_TOKEN_SECRET);
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};
