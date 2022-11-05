CREATE DATABASE moshack;
\c moshack

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS user_apartments;

DROP TABLE IF EXISTS db_apartments;

CREATE TABLE users (
    id serial PRIMARY KEY,
    login varchar(25) UNIQUE,
    password text
);
