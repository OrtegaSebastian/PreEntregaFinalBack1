const express = require('express');
const productosRoutes = require("./api/routes/productos");
const app = express();


const context = process.env.CONTEXT || 'api';
app.use('/api/productos', productosRoutes);
app.use("/",express.static("api"));



const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});