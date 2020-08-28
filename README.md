# Masons Beef

Mason's Beef is a company located in Dallas, TX which currently has around 300 clients. They sell artisan beef jerky, and as of yet have no online presence in the form of a website. This project will be to build them a fully functional full stack application with RESTful routing. The end goal is togive the client(owners of the company) the ability to take orders via their website, add products, remove products, and display quantities available.On MongoDB I will store product name, description, qunaitity in stock, and a link to the product image. Users will also be stored on the database andauthenticated via json web tokens to check for admin or regular user. Admins will be able to edit delete and add new products. Once MVP is reached, I
plan on adding another feature where users can add items to a cart which will save for x amount of time.

## Users
Shoppers online looking for good snacks will be able to go to the site, select the items they want, and checkout.
Shop owners will be notified of new orders via email.

## Links

Repo's:

[CLIENT](https://github.com/dmitriyz718/masonsbeef-client)


[SERVER](https://github.com/dmitriyz718/masonsbeef-server)

Live:

[https://masonsbeefclient.herokuapp.com/](https://masonsbeefclient.herokuapp.com/)

API -

[https://masonsbeef.heroku.com](https://masonsbeef.heroku.com)

[Original Trello](https://trello.com/b/jbnEXgEp/masons-beef)

[Original Wireframe](https://wireframepro.mockflow.com/editor.jsp?editor=on&bgcolor=white&perm=Create&ptitle=MasonsBeef&category=web&projectid=Ma594a2caf90edf68911f91fdcfadbc031598025060026&publicid=957c47fe28bf4e3f8950864b6912f333#/page/af5acee5ed4343db9622ca294110e6a3)


[Diagram](https://app.lucidchart.com/documents/edit/ef385167-d70a-4c8b-8aca-01a059e02dc6/0_0)

## Installation

Clone the server (this repo) and the client (repo link below) and run npm i for both.
env files are not pushed so make your own with a jwt sevret, smtp info for contact us and so on

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
    "nodemailer": "^6.4.11"
```
## Dependencies for Client

```
    "axios": "^0.19.2",
    "bootstrap": "^4.5.2",
    "dotenv": "^8.2.0",
    "jwt-decode": "^2.2.0",
    "react": "^16.13.1",
    "react-bootstrap": "^1.3.0",
    "react-bulma-components": "^3.4.0",
    "react-dom": "^16.13.1",
    "react-redux": "^7.2.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.3",
    "reactstrap": "^8.5.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0"
    "nodemailer": "^6.4.11"
```

## Planned additions
Make shopping cart fully functional with a checkout page that intakes user's personal info to check out as guest
Or if the user is logged in, retrieve info from MongoDB

Create a seperate section for order management.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
