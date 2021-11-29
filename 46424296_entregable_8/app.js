const express = require('express');
const app = express();
const port = 3000;
const product = require('./NuevosJson/ProductosAll.json');
const carr = require('./NuevosJson/cart/654.json');
const categ = require('./NuevosJson/category/all.json');
const cartindi = require('./NuevosJson/category/1234.json');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/static"));


app.get("/product", (req, res) => {
    res.send(product);
});
app.get("/carr", (req, res) => {
    res.send(carr);
});
app.get("/categ", (req, res) => {
    res.send(categ);
});
app.get("/cartindi", (req, res) => {
    res.send(cartindi);
});


app.listen(port, () => {
    console.log("Escuchando a http://localhost:" + port);
});