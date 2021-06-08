import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) { // own auth
            decodedData = jwt.verify(token, process.env.SECRET);
            req.userId = decodedData?.id; // optional chaining
        } else { // third party auth
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub; // google sub
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;