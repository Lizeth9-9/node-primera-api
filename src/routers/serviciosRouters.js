import express from "express";
import {
    todosLosServicios,
    crearServicio,
    actualizarServicio,
    borrarServicio,
    todosLosProductos,
    crearProducto,
    actualizarProducto,
    borrarProducto,
} from "../controllers/serviciosControllers.js";

const rutasServicios = express.Router();

//get de all servicios en ruoters

rutasServicios.get("/servicios", todosLosServicios); //lee todos los servicios desde controlers
rutasServicios.post("/servicios", crearServicio); 
rutasServicios.put("/servicios", actualizarServicio); 
rutasServicios.delete("/servicios", borrarServicio); 


////////////////////////////////////////////////////////////////////////////////


// get get all productos  en ruoters

rutasServicios.get("/productos", todosLosProductos);
rutasServicios.post("/productos", crearProducto); 
rutasServicios.put("/productos", actualizarProducto); 
rutasServicios.delete("/productos", borrarProducto); 


export default rutasServicios;
