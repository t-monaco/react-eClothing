# Gorilla Bross Clothing eCommerce

## Descripption
Clothing eCommerce, built with ReactJS and NodeJS, implementing Redux for state management. Additionally, it uses Firebase to store product's data as well as user's information. Also, firebase authenticator was implemented to manage user registration and login. Moreover, all the payment process was designed using Stripe API (DEMO purpose), after payment success, purchase info is also stroe into Firebase.

## Installation
Frontend code under clint folder -> `/client`. (All React Code) 

Backend code held under root directory -> `/server.js`.

### Steps

1. Install dependencies in both directories, root and client
2. Replace the `config` variable in your `/client/src/firebase/firebase.utils.js` with your own config object from the firebase dashboard! Navigate to the project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.
3. Set the `publishableKey` variable in the `/client/src/components/stripe-button/stripe-button.component.jsx` with your own publishable key from the stripe dashboard.