//get de all servicios en controllers

export const todosLosServicios = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: "aca se reciben los servicios",
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            mensaje: "Error del servidor.",
        });
    }
};

// POST crear los servicios

export const crearServicio = async (req, resp) => {
    try {
        resp.status(201).json({
            ok: true,
            mensaje: "creado correctamente",
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            mensaje: "Error del servidor.",
        });
    }
};

// put actualizar

export const actualizarServicio = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: `servicio actualizado`,
        });
    } catch (error) {
        resp.status(500).json({ ok: false, mensaje: "Error del servidor." });
    }
};

// delete servicio
export const borrarServicio = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: `servicio eliminado`,
        });
    } catch (error) {
        resp.status(500).json({ ok: false, mensaje: "Error del servidor." });
    }
};

///////////////////////////////////////////////////////////////////////////////////

//get de all productos en controllers

export const todosLosProductos = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: "aca se reciben los productos",
        });
    } catch (error) {
        resp.status(500).json({
            ok: true,
            mensaje: "Error del servidor.",
        });
    }
};
// POST crear los productos

export const crearProducto = async (req, resp) => {
    try {
        resp.status(201).json({
            ok: true,
            mensaje: "creado correctamente",
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            mensaje: "Error del servidor.",
        });
    }
};

// put actualizar

export const actualizarProducto = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: `servicio actualizado`,
        });
    } catch (error) {
        resp.status(500).json({ ok: false, mensaje: "Error del servidor." });
    }
};

// delete servicio
export const borrarProducto = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: `servicio eliminado`,
        });
    } catch (error) {
        resp.status(500).json({ ok: false, mensaje: "Error del servidor." });
    }
};
