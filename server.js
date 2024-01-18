const ProductManager = require("./clase")

const express = require("express")
const app = express()

const PORT = 8080

app.use(cors());

const ProductManager = require("./clase")

const productManager = new ProductManager()

app.use('/', (req, res) => {
    res.json(productManager.getProducts())
})

app.use('/productId/:productId', (req, res) => {
    const idProducto = req.params.productId
})