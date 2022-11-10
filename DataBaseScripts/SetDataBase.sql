CREATE DATABASE moshack;
\c moshack

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    login varchar(25) UNIQUE,
    password text,
    role text
);

CREATE TABLE user_apartments(
    id serial PRIMARY KEY,
    user_id serial, 
    type1 text,
    type2 text,
    type3 text,
    type4 smallint,
    type5 text,
    type6 smallint,
    type7 real,
    type8 real,
    type9 text,
    type10 integer,
    type11 text,
    type12 real,
    type13 real,
    type14 real,
    type15 real
);

CREATE TABLE db_apartments(
    id serial PRIMARY KEY,
    user_id serial, 
    type1 text,
    type2 text,
    type3 text,
    type4 smallint,
    type5 text,
    type6 smallint,
    type7 real,
    type8 real,
    type9 text,
    type10 integer,
    type11 text,
    type12 real,
    type13 real,
    type14 real,
    type15 real
);