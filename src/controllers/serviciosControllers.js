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

export const actualizarServicioId = async (req, resp) => {
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
export const borrarServicioId = async (req, resp) => {
    try {
        resp.status(200).json({
            ok: true,
            mensaje: `servicio eliminado`,
        });
    } catch (error) {
        resp.status(500).json({ ok: false, mensaje: "Error del servidor." });
    }
};

