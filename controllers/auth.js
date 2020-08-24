const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// create account
const index = (req, res) => {
    // validation
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields to register' });
    }
    if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }
    //check for user existing
    db.User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new db.User({
                username,
                email,
                password
            });
            // create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            // create and sign web token
                            jwt.sign( // takes three fields, one is payload, can be more than just ID
                                // second is secret and third is expires in
                                { id: user.id },
                                process.env.JWT_SECRET,
                                { expiresIn: '1h' },
                                (err, token) => { // fourth is the callback function
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.username,
                                            email: user.email
                                        }
                                    })

                                }
                            )


                        })
                })
            })
        })

}
const findUser = (req, res) => {
    db.User.findById(req.username.id)
        .select('-password')
        .then(user => res.json(user));
};
module.exports = {
    index,
    findUser
}
