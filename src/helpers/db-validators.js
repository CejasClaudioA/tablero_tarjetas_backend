const bind = require('pg-bind');

const emailExiste = async (email = '') => {
    const existeEmail = await bind('SELECT email from usuarios where email = :email', email);
    if (existeEmail) {
        throw new Error(`El correo: ${email} ya está registrado`);
    }
}

module.exports = {
    emailExiste
}