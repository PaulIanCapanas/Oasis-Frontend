"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var database_1 = require("./database");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
var corsOptions = {
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
app.post("/login", function (req, res) {
    var username = req.body["username"];
    var password = req.body["password"];
    var findAccount = "\n        SELECT * FROM accounts\n        WHERE username = '".concat(username, "' AND password = '").concat(password, "'\n    ");
    database_1.default.query(findAccount)
        .then(function (result) {
        if (result.rows.length > 0) {
            console.log("Login successful");
            res.json({ message: "Login successful" });
        }
        else {
            console.log("Invalid credentials");
            res.status(401).json({ error: "Invalid credentials" });
        }
    })
        .catch(function (err) {
        console.error("Internal Server Error:", err);
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    });
});
var port = 3000;
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
