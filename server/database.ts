import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    password: "asadawe123",
    host: "localhost",
    port: 5432,
});

const createDatabase = `
CREATE DATABASE "sign-up-system";
`

const createTable = `
CREATE TABLE ACCOUNTS (
    USER_ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(50) UNIQUE NOT NULL,
    PASSWORD VARCHAR(50) NOT NULL
);
`;

pool.query(createDatabase)
    .then((response) => {
        console.log("Table Created");
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

export default pool;
