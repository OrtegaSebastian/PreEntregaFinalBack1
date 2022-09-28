const express = require('express');
const productosController = require('../controllers/productos'); 

const router = express.Router();

router.get('/', (req, res) => {
    const response = productosController.getAll();
    res.send(response);
    
});

router.get('/:id', (req, res) => {
    productosController.getById(req, res);   
});

router.post('/', (req, res) => {
    const producto = req.body;
    productosController.save(producto)
});

router.put('/:id', (req, res) => {
    const producto = req.body;
    let id= req.params;
    id = parseInt(id.id)
    const updateProduct = 
    productosController.updateById(id,producto)
    .then((data) => res.send(data))    
});

router.delete('/:id', (req, res) => {
    let params = req.params;
    params = parseInt(params.id)
    const allProducts = productosController.deleteById(params)
    .then((data) => res.send(data));
});

module.exports = router;