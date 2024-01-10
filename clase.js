const fs = require("fs");

class ProductManager{
    
    constructor(){
        this.products = [];
        this.path = "products.json";
    }

    addProduct(product){
        this.getProducts();
        const {title, description, price, thumnail, code, stock} = product;
        if(!title || !description || !price || !thumnail ||!code || !stock){
            console.log("todos los campos son requeridos");
            return;
        }

        if(this.products.some((p) => p.code === code)){
            console.log("el codigo del producto ya existe");
            return;
        }

        const id = this.setId();
        this.products.push({id, ...product})

        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
            console.log("datos guardados satisfactoriamente");
        } catch (error) {
            console.error("error al escribir en el archivo", error);
        }
    }

    getProducts(){
        try {
            const data = fs.readFileSync(this.path, "utf8");
            this.products = JSON.parse(data);
            console.log("archivo leido exitosamente");
        } catch (error) {
            console.error("error al leer el archivo", error);
        }
        return this.products
    }

    getProductsById(id){
        const product = this.products.find((p) => p.id === id);
        if(product === undefined){
            console.log(`el producto con id ${id} no existe`);
        }
        else return product;
    }

    setId(){
        this.lastId = this.getLastProductId();
        if(this.lastId === 0) this.lastId = 1;
        else this.lastId++;
        return this.lastId;
    }

    getLastProductId(){
        if(this.products.length === 0) return 0;
        const lastProductId = this.products[this.products.length - 1].id;
        console.log("el ultimo id es", lastProductId);
        return lastProductId;
    }

}


const productManager = new ProductManager()
const product1 ={
    title:"title",
    description: "description",
    price:"price",
    thumnail: "thumnail",
    code:"123",
    stock: "5",
};

const product2 ={
    title:"title 2",
    description: "description",
    price:"price",
    thumnail: "thumnail",
    code:"543",
    stock: "5",
};

productManager.addProduct(product2);
const misProductos = productManager.getProducts()
console.log(misProductos);