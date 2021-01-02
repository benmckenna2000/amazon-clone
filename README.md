# This app is a clone of the popular site Amazon


## Deployed version

### https://clone-bd22e.firebaseapp.com/

The app is deployed using firebase hosting.

## Demo account

### Email: 123@outlook.com
### Password: 123123

This account has been made with the purpose of testing the App

Nobody wants to waste their time creating an account!

With this login you will be able to access all features of the site.

## Demo payment details

### Card Number: 4242424242424242 
### MM/YY: 0424 
### CVC: 242 
### ZIP: 424242

This application uses stripe to handle payments, when I set it up I used the test key, which allows us to be
able to use mock card details to test whether or not the functionality behind the payments work.

## Dependencies used:

* React 
  * the javascript library used to make this app
* React-Router-Dom
  * used to setup different routes on the app, e.g "/orders" for orders
* Material-ui/core and Material-ui/icons
  * used to import icons in for things such as the basket and search icon
* Stripe-Js & React-Stripe-Js
  * used to process payments on the site
* Axios
  * used to get a client secret so that stripe can process the payment 
* React-Currency-Format
  * used to format the price of my products in the app

## Why Firebase?

### Authentication

Firebase makes user authentication so easy, all you have to do is enable a sign in method
on the Firebase website and write out the functionality that Firebase provides for each method.

### Firestore

Firestore is a real time database where the data from a placed order will be sent.

Firestore is also really easy to use for retrieving that data as well, and if you use the app you'll be 
able to see that once you've placed an order, it will be displayed in the orders section, you can access this from the header.

### Functions

Firebase Functions allowed me to have a backend for the site without having to make my own API, all I did was use the command 'firebase init' and selected
the functions option on the CLI. 

Inside of the newly created functions folder is an index.js file, with all the server code already written out.

The backend was used to handle stripe payments.

