const express = require('express');
const Productos = require('../controllers/productos');
const productosController = new Productos; 

const router = express.Router();

router.get('/', (req, res) => {
    productosController.getAll(req, res);
});

router.get('/:id', (req, res) => {
    productosController.getById(req, res);
});

router.post('/', (req, res) => {
    res.send('POST');
});

router.put('/', (req, res) => {
    res.send('PUT');
});

router.delete('/', (req, res) => {
    res.send('DELETE');
});

module.exports = router;