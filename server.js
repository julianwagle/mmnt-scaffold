// const subscription = require("./functions/subscription")
// const customer = require("./functions/customer")
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET);
const compression = require("compression");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.disable("x-powered-by");

app.use(compression());
app.use(express.static(path.join(__dirname, "build")));
app.use((req, res, next) => {bodyParser.json()(req, res, next);});

app.post("/customer/c", async (req, res) => {
  stripe.customers.create({email: req.body.e})
  .then((customer) => {res.json({"customer":customer.id})})
  .catch(error => res.status(400).send({ error: { message: error.message }}));
});

app.post("/customer/d", async (req, res) => {
  stripe.customers.del(req.body.i)
  .then(() => {res.json({"customer":""})})
  .catch(error => console.error(error));
});

app.post("/payment/c", async (req, res) => {
  stripe.paymentIntents.create({
    amount: req.body.a, // num of pennies
    currency: 'usd',
    customer: req.body.i,
  })
  .then((payment) => {res.json({"payment":payment})})
  .catch(error => console.error(error));
});

app.post("/subscription/c", async (req, res) => {
  var p = process.env.REACT_APP_STRIPE_DEFAULT_PRICE_ID
  stripe.subscriptions.create({
    customer: req.body.i,
    items: [{price: p}],
    // trial_end: 'now', // testing
    trial_period_days: 30,
    expand: ['latest_invoice.payment_intent'],
  })
  .then((subscription) => {res.json({"subscription":subscription})})
  .catch(error => res.status(400).send({ error: { message: error.message }}));
});

app.post("/subscription/r", async (req, res) => {
  stripe.subscriptions.list({customer: req.body.i})
  .then((subscription) => {res.json({"subscription":subscription.data[0]})})
  .catch(error => res.status(400).send({ error: { message: error.message }}));
});

app.post("/subscription/u", async (req, res) => {
  stripe.subscriptions.list({customer: req.body.i})
  .then((subscription) => {
    var s = subscription.data[0].id
    stripe.subscriptions.update(s,{
      // items: [{price: req.body.p}], // TODO
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent']
    })
    .then((update) => {
      res.json({"subscription":update})
    })
    .catch(error => res.status(400).send({ error: { message: error.message }}));
  })
});

app.post("/subscription/d", async (req, res) => {
  stripe.subscriptions.list({customer: req.body.i})
  .then((subscription) => {
    var s = subscription.data[0].id
    stripe.subscriptions.del(s)
    .then(() => {res.json({"subscription":""})})
  })
  .catch(error => console.error(error));
});

var port = 4000 // for local dev
if (process.env.REACT_APP_ENV === "production") {
  port = 3000 // for deployment
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(port, function() {
  console.log(`Mysite is running @http://localhost:${port})`);
});
