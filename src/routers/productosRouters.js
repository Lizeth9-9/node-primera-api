import express from "express";
import {
    actualizarProductoId,
    borrarProductoId,
    crearProducto,
    todosLosProductos,
} from "../controllers/productosControllers.js";

const rutasProductos = express.Router();
// get all productos  en ruoters

rutasProductos.get("/", todosLosProductos);
rutasProductos.post("/", crearProducto);
rutasProductos.put("/:id", actualizarProductoId);
rutasProductos.delete("/:id", borrarProductoId);

export default rutasProductos;
