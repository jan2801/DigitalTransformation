\c moshack

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    login varchar(25) UNIQUE,
    password text
);