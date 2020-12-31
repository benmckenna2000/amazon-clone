const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I4WK7HaGBlrQYJrv7sxRNOW6qwJWrR5GWr8b8CuiCN6rogqgciFnyptrTl2tKEoLyGEDcZQ9Ae0E7dDVp1Jhu1700cxy8pXTL"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-bd22e/us-central1/api
