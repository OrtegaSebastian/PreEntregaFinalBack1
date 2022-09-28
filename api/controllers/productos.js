const fs = require('fs')
const filename = '../../files/productos.json';
const path = require('path');
    
// save(Object): Number - Recibe un objeto, lo guarda en el file, devuelve el id asignado.
const save = async (objProduct)  =>{
    const data = await fs.promises.readFile(path.resolve(__dirname, `${filename}`),"utf-8")
    if(data){
    const products = JSON.parse(data);
    const id = products.length +1;
        objProduct.id = id;     
        products.push(objProduct);
            const productsString = JSON.stringify(products);
            await fs.promises.writeFile(path.resolve(__dirname, `${filename}`), productsString);
            return products;
        }
        else{
            objProduct.id = 1;
            this.product.push(objProduct);
            const productsString = JSON.stringify(this.product);
            await fs.promises.writeFile(path.resolve(__dirname, `${filename}`), productsString);
        }      
}

// Metodo getById(Number)
const getById = async (id) => {
    if (fs.existsSync(filename)){
        const data = fs.readFileSync(`${filename}`, 'utf-8');
        const dataParseada = JSON.parse(data);
        const objeto = dataParseada.filter((objeto) => objeto.id === id);
        return objeto;
    }
}

// Metodo getAll()
const getAll = async () =>{
    console.log(path.resolve(__dirname, `${filename}`));
    if (fs.existsSync(filename)){
        const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), 'utf-8');
        console.log("getAll", data);
        if (data) {
            return data;
        }else{
            return 'Not data Found';
        }
    }
    
    // return 'File not Found'; 
    
}

// Metodo deleteById(Number)
const deleteById = async (id) => {
    const data = fs.readFileSync(filename, "utf-8");
    const dataParseada = JSON.parse(data);
    const dataFiltrada = dataParseada.filter((objeto) => objeto.id !== id);
    const dataString = JSON.stringify(dataFiltrada);
    fs.writeFileSync(filename, dataString);
    return dataFiltrada;
}

// Metodo deleteAll(Number)

const deleteAll = async () => {
fs.writeFileSync(this.archivo, "[]");
return "[]";
}

// Metodo updateById(id, prodcut)

const updateById = async (id, productNew)=> {
            const data = fs.readFileSync(filename, "utf-8");
            console.log(productNew);
            let dataParseada = JSON.parse(data);
            let productToUpdate = dataParseada.find((objeto) => objeto.id === id);
            if (productToUpdate === undefined) {
                throw { msg: "404 Not found" };
            }
            let productFiltered = dataParseada.filter((objeto) => objeto.id !== id);
            productToUpdate = { id, ...productNew };
            productFiltered.push(productToUpdate);
            const dataString = JSON.stringify(productFiltered);
            console.log(productFiltered);
            fs.writeFileSync(filename, dataString);
            return "Product updated";
}

module.exports = {
    save,
    getById,
    getAll,
    deleteById,
    deleteAll,
    updateById
};

