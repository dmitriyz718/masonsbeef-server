const db = require('../models');
const nodemailer = require('nodemailer');

// GET api/products - get all products
const index = (req, res) => {
    db.Product.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
}
// create item
const create = (req, res) => {
    db.Product.create(req.body, (err, createdProduct) => {
        if (err) console.log(err);
        res.json(createdProduct)
    })
}
// delete an item
const delItem = (req, res) => {
    db.Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        if (err) console.log(`error deleting product: `, err);
        res.status(200).json(deletedProduct)
    })
}
// view single item
const showItem = (req, res) => {
    db.Product.findById(req.params.id, (err, singleProduct) => {
        if (err) console.log(`error showing item: `, err);
        res.json(singleProduct)
    })
}
// update product
const updateProduct = (req, res) => {
    db.Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
        if (err) console.log(`error updating product, error: `, err)
        res.json(updatedProduct)
    })
}
let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER, //replace with your email provider
    port: process.env.SMTP_PW,
    auth: {
        user: process.env.SMTP_USER, //replace with the email address
        pass: process.env.SMTP_PW, //replace with the password
    }
});
const sendEmail = (req, res, next) => {

    let name = req.body.name
    let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    let mail = {
        from: name,
        to: "dzag17188@gmail.com",
        subject: subject,
        text: content
    }
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'Email sent!'
            })
        }
    })

}
module.exports = {
    index,
    create,
    delItem,
    showItem,
    updateProduct,
    sendEmail
}
