const db = require('../models');
const bcrypt = require('bcryptjs');



// GET api/products - get all products
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
                            res.json({
                                user: {
                                    id: user.id,
                                    username: user.name,
                                    email: user.email
                                }
                            })
                        })
                })
            })
        })

}

module.exports = {
    index
}
