const express = require('express');
const productosRoutes = require("./api/routes/productos");
const app = express();

//app.use(express.json());
const context = process.env.CONTEXT || 'api';
app.use('/api/productos', productosRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});