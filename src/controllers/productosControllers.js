//get de all productos en controllers

export const todosLosProductos = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: "aca se reciben los productos",
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
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

export const actualizarProductoId = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: `productos actualizado`,
        });
    } catch (error) {
        resp.status(500).json({ ok: false, mensaje: "Error del servidor." });
    }
};

// delete productos
export const borrarProductoId = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: `productos eliminado`,
        });
    } catch (error) {
        resp.status(500).json({ ok: false, mensaje: "Error del servidor." });
    }
};

