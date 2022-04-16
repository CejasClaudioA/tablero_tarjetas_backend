const bind = require('pg-bind');
const pool = require('../database/db');

const emailExiste = async (email = '') => {
    const myQuery = bind('SELECT count(email) from usuario where email = :email', { email });
    const { rows } = await pool.query(myQuery);

    if (rows[0].count > 0) {
        throw new Error(`El correo: ${email} ya está registrado`);
    }
}

const emailNoExiste = async (email) => {
    const myQuery = await bind('SELECT count(email) from usuario where email = :email', { email });
    const { rows } = await pool.query(myQuery);

    if (rows[0].count == 0) {
        throw new Error(`El correo: ${email} no está registrado`);
    }
}

module.exports = {
    emailExiste,
    emailNoExiste
}