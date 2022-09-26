// Funcion que devuelve todos los productos
const getAll = (req, res) => {
  console.log('getAll');
  res.send([
    {
      id: 1,
      timestamp: 15/03/2022,
      nombre: "Producto 1",
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
  ]);
}

//funcion que restorna un producto
const getById = (req, res) => {
  const id = req.params.id;
  res.send({

  });
}





module.exports = {
  getAll,
  getById,
};