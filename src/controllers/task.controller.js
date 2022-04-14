const pool = require('../database/db');
const bind = require('pg-bind');


const getAllTask = async (req, res) => {
    try {
        const myQuery = await bind('SELECT * FROM tareas', {});
        const { rows } = await pool.query(myQuery);
        res.status(200).json({
            tareas: rows
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }
}

const getTaskByID = async (req, res) => {
    try {
        const id = { id: req.params.id };
        const myQuery = await bind('SELECT * FROM tareas where tareaid = :id', id);
        const { rows } = await pool.query(myQuery);
        res.status(200).json({
            tarea: rows[0]
        });

    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

const createTask = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        const DataTask = {
            titulo,
            descripcion
        }

        const myQuery = bind.insert('INSERT INTO tareas(titulo, descripcion) VALUES (:titulo , :descripcion)', DataTask);

        await pool.query(myQuery);
        res.status(200).json({
            status: "ok!",
            msg: `Se creo la tarea con el titulo: ${titulo}`
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message,
        });
    }
}

module.exports = {
    getAllTask,
    getTaskByID,
    createTask,
    // updateTask,
    // deleteTask,
    // shareTask,
}