CREATE TABLE usuario(
    idusuario SERIAL PRIMARY KEY,
    nombre varchar(30) NOT NULL,
    apellido varchar(30) NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(240) NOT NULL
);