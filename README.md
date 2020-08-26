# Masons Beef

Mason's Beef is a company located in Dallas, TX which currently has around 300 clients. They sell artisan beef jerky, and as of yet have no online
            presence in the form of a website. This project will be to build them a fully functional full stack application with RESTful routing. The end goal is to
            give the client(owners of the company) the ability to take orders via their website, add products, remove products, and display quantities available.
            On MongoDB I will store product name, description, qunaitity in stock, and a link to the product image. Users will also be stored on the database and
            authenticated via json web tokens to check for admin or regular user. Admins will be able to edit delete and add new products. Once MVP is reached, I
            plan on adding another feature where users can add items to a cart which will save for x amount of time.

## Installation

Clone the server (this repo) and the client (repo link below) and run npm i for both.

```bash
npm i
```

## Dependencies for server

```javascript
    "bcryptjs": "^2.4.3"
    "cors": "^2.8.5"
    "dotenv": "^8.2.0"
    "express": "^4.17.1"
    "jsonwebtoken": "^8.5.1"
    "mongoose": "^5.10.0"
    "node": "^14.8.0"
    "nodemon": "^2.0.4"
```
## Dependencies for Client

```
    jwt-decode": "^2.2.0"
    react: ^16.13.1
    react-bulma-components: ^3.4.0
    react-dom: ^16.13.1
    react-router-dom: ^5.2.0
    react-scripts: 3.4.3
    Redux/ React Redux/ Thunk
    REACT BOOTSTRAP FOR DESIGNING
```

## Planned additions
Make shopping cart fully functional with a checkout page that intakes user's personal info to check out as guest
Or if the user is logged in, retrieve info from MongoDB

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
