"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: "postgres",
    password: "asadawe123",
    host: "localhost",
    port: 5432,
});
var createDatabase = "\nCREATE DATABASE \"sign-up-system\";\n";
var createTable = "\nCREATE TABLE ACCOUNTS (\n    USER_ID SERIAL PRIMARY KEY,\n    USERNAME VARCHAR(50) UNIQUE NOT NULL,\n    PASSWORD VARCHAR(50) NOT NULL\n);\n";
pool.query(createDatabase)
    .then(function (response) {
    console.log("Table Created");
    console.log(response);
})
    .catch(function (err) {
    console.log(err);
});
exports.default = pool;
