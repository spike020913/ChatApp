import jwt from 'jsonwebtoken';

const generateToken = (userID, res) => {
    const token = jwt.sign({ userID }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d',
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
}

export default generateToken;