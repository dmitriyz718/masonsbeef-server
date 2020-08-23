const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.header('x-auth-token');
    // check for token
    if (!token) {
        return res.status(401).json({ msg: 'You are not authorized' });
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Add user from payload
        req.username = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Invalid authorization' })
    }
}

module.exports = authenticate;
