const db = require('./models');
const data = require('./productData.json');

db.Product.deleteMany({}, (err, deletedGames) => {
    db.Product.create(data.products, (err, seededProducts) => {
        if (err) console.log(err);

        console.log(data.products.length, 'products created successfully');

        process.exit();
    });
});
