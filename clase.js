class ProductManager{
    
    constructor(){
        this.products = [];
    }

    addProduct(product){
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
    }

    getProducts(){
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
        if(!this.lastId) this.lastId = 1;
        else this.lastId++;
        return this.lastId;
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

productManager.addProduct(product1);
const misProductos = productManager.getProducts()
console.log(misProductos);