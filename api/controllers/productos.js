// Funcion que devuelve todos los productos
const getAll = (req,res,listaProductos) => {
  console.log('getAll');
  res.send([
    {
      id: 1,
      nombre: "Producto 1",
      timestamp: 15/03/2022,
      descripcion: "Descripcion del producto 1",
      codigo: "ABC123",
      foto: "https://www.google.com",
      precio: 100,
      stock: 5
    },
    {
      id: 2,
      nombre: "Producto 2",
      timestamp: 20/03/2022,
      descripcion: "Descripcion del producto 2",
      codigo: "ABC123",
      foto: "https://www.google.com",
      precio: 100,
      stock: 50
    }
  ])
  let productosHTML = '';
  listaProductos.forEach(element =>{
    productosHTML
    `<div class="product-container">
        <h4>${element.id}</h4>
        <h3>${element.nombre}</h3>
        <h4>${element.timestamp}</h4>
        <h4>${element.descripcion}</h4>
        <h4>${element.codigo}</h4>
        <img src="${element.foto}" />  
        <h4>$${element.precio}</h4>      
        <h5>${element.stock}</h5>
        
        <h1></h1>
        <button class="button-add" onclick="add(${element.id},${element.precio}">Agregar</button>
      </div> `
    document.getElementById('page-content').innerHTML= productosHTML;  
  });
  window.onload = async ()=>{
    const listaProductos = await(await fetch("api/productos")).json();
    getAll(listaProductos)
  }
}

//funcion que retorna un producto
const getById = (req, res) => {
  const id = req.params.id;
  res.send({

  });
}

const deleteById = (req,res)=>{
    const id = req.params.id;
    res.send({

    })
}

const deleteAll = (req,res)=>{
  const id = req.params.id;
  res.send({

  })
}





module.exports = {
  getAll,
  getById,
  deleteById,
  deleteAll
};