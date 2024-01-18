const ProductManager = require("./ProductManager")

const express = require("express")
const app = express()

const PORT = 8080

app.use(cors());

const ProductManager = require("./ProductManager.js")

const productManager = new ProductManager()

app.get('/', (req, res) => {
    res.json(productManager.getProducts())
})

app.get('/productId/:productId', (req, res) => {
    const idProducto = req.params.productId
    let product = productManager.getProductsById(idProducto)
    
    console.log(product)
    if(!product) return res.send({error:"producto no encontrado"})
    res.json(product)
})

app.get('/producto/:limite', (req, res) => {
    let limite = parseInt(req.query.limite)
    let limitedProducts = [...productManager.getProducts()]

    if(isNaN(limite) || limite <= 0){
        return res.status(400).json({error: "parametro invalido"})
    } else{
        limitedProducts = limitedProducts.slice(0, limite)
        res.send(limitedProducts)
    }
})


app.listen(PORT, () => {
    console.log(`servidor con express en el puerto ${PORT}`)
})
