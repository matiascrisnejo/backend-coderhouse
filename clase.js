class ProductManager {
    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct)
    }

    getProductById(pid){
        const productoId = this.products.findIndex(product => product.id == pid)
        if (productoId === -1 ) {
            return `El producto no existe`
        }
        return productoId
    }


}


const productManager = new ProductManager()
console.log(productManager.addProduct("coca","es una bebida", 100, "ruta de imagen", 1, 1000))
console.log(productManager.getProducts())