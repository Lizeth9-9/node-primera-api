import express from "express";
import {todosLosServicios,
    crearServicio,
    actualizarServicioId,
    borrarServicioId,} from "../controllers/serviciosControllers.js";

const rutasServicios = express.Router();

//get de all servicios en ruoters

rutasServicios.get("/", todosLosServicios); //lee todos los servicios desde controlers
rutasServicios.post("/", crearServicio);
rutasServicios.put("/:id", actualizarServicioId);
rutasServicios.delete("/:id", borrarServicioId);

export default rutasServicios;
