const pool = require('../database/db');
const bcryptjs = require('bcryptjs');
const bind = require('pg-bind');
const { generarJWT } = require('../helpers/jwt');
const Usuario = require('../models/usuario');

const register = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(req.body.password, salt);

        const myQuery = bind.insert('INSERT INTO usuario(nombre,apellido,email, password) VALUES (:nombre , :apellido , :email, :password)', usuario);
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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const myQuery = bind('SELECT idusuario, email, password, nombre FROM usuario WHERE email = :email', { email });

        const { rows } = await pool.query(myQuery);
        const usuario = new Usuario(rows[0]);

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            res.status(400).json({
                msg: "El usuario / Password no son correctos",
            });
            return;
        }


        const token = await generarJWT(usuario.idusuario);
        res.status(200).json({
            usuario,
            token
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            msg: "algo salio mal!",
            error
        });
    }
}

module.exports = {
    register,
    login
}