# This app is a clone of the popular site Amazon


## Deployed version

### https://clone-bd22e.firebaseapp.com/

The app is deployed using firebase hosting and includes the use of other firebase technology including, authentication, 
cloud firestore and functions for the back end.

## Demo account

### Email: 123@outlook.com

### Password: 123123

This account has been made with the purpose of testing the website, nobody wants to waste their time creating an account!
With this login you will be able to access all features of the site.

## Demo payment details

### Card Number: 4242424242424242 
### MM/YY: 0424 
### CVC: 242 
### ZIP: 424242

This application uses stripe to handle payments, when I set it up I used the test key, which allows us to be
able to use mock card details to test whether or not the functionality behind payments works, this site is also just for show and not a
real use case, so therefore there's no need to implement the real version of Stripe.

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





