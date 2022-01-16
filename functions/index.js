const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")('sk_test_51JsTmMGrpCgv2QkXokNPh1ZJztGmUwsgAWTnrC6FASJmGGK9nXX06mVM2q4mc9Hh3cC55ldh2prOtuQ0YJqZg8Wk0077mIZR0P')

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hellouuuu'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app);