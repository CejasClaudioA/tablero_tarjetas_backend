class Usuario {

    constructor({ apellido = '', nombre = '', email = '', password = '' }) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.email = email,
            this.password = password
    }
}

module.exports = Usuario;