const pool = require('../database/db');

const bcryptjs = require('bcryptjs');
const bind = require('pg-bind');


const crearUsuario = async (req, res) => {
    try {
        const { nombre, apellido, email, password } = req.body;
        const DataUser = {
            nombre,
            apellido,
            email,
            password,
        }
        const salt = bcryptjs.genSaltSync();
        DataUser.password = bcryptjs.hashSync(password, salt);

        const myQuery = bind.insert('INSERT INTO usuario(nombre,apellido,email, password) VALUES (:nombre , :apellido , :email, :password)', DataUser);

        console.log(myQuery);


        await pool.query(myQuery);
        res.status(200).json({
            msg: "ok!"
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message,
        });
    }
}

const loginUsuario = (req, res) => {
    res.status(200).json({
        msg: "bien!"
    });
}

module.exports = {
    crearUsuario,
    loginUsuario
}