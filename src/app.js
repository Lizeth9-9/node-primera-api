import express from "express";
import "dotenv/config";
import rutasServicios from "./routers/serviciosRouters.js";
import { todosLosProductos } from "./controllers/serviciosControllers.js";

const app = express();
const PORT = process.env.PORT || 3000;

//RUTAS

// get get all services api/v1/servicios   en app 

app.use('/api/v1/', rutasServicios); // ACA QUEDA LLAMADA app COMO EN SERVICIOS//

// get("/api/v1/servicios", (req, resp) => {
//     resp.json({
//         ok: true,
//         mensaje: "aca se reciben los servicios",
//     });
// });   ////// ESTO IRA PARA RUTAS ////

// get get all productos api/v1/productos

app.use('/api/v1', todosLosProductos) // ACA QUEDA LLAMADA app COMO EN PRODUCTOS//


// get("/api/v1/productos", (req, resp) => {
//     resp.json({
//         ok: true,
//         mensaje: "aca se reciben los productos",
//     });
// });

app.listen(PORT, () => {
    console.log(`servidor a la escucha del puerto ${PORT}`);
});