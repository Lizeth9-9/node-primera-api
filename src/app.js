import express from "express";
import "dotenv/config";
import rutasServicios from "./routers/serviciosRouters.js";
import rutasProductos from "./routers/productosRouters.js";

const app = express();
const PORT = process.env.PORT || 3000;

//RUTAS

//SERVICIOS

// get get all services api/v1/servicios   en app

app.use("/api/v1/servicios", rutasServicios); // ACA QUEDA LLAMADA app COMO EN SERVICIOS//
app.use("/api/v1/productos", rutasProductos); // ACA QUEDA LLAMADA app COMO EN PRODUCTOS//

app.listen(PORT, () => {
    console.log(`servidor a la escucha del puerto ${PORT}`);
});
