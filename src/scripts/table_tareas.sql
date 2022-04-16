CREATE DATABASE tablero_tarjetas;

CREATE TABLE tareas(
    tareaid SERIAL PRIMARY KEY,
    titulo varchar(40) NOT NULL,
    descripcion varchar NOT NULL
);