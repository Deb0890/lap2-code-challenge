DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    id serial PRIMARY KEY,
    title varchar(300) NOT NULL,
    name varchar(100) NOT NULL,
    story varchar(1000) NOT NULL
);