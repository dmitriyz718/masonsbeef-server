const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// GET api/items - get all items

const index = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            msg: 'Please enter all fields to log in to Masons'
        });
    }
    //check for user existing
    db.User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exist' });

            // compare hash password to plain text aka validate password
            bcrypt.compare(password, user.password) // compare text password to hash password and return a promise
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
                    jwt.sign({ id: user.id },
                        process.env.JWT_SECRET,
                        { expiresIn: '1h' },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        })

                })

        })
}

module.exports = {
    index,
}
