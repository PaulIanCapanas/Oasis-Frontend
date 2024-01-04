import express, { Request, Response } from "express";
import cors from "cors";
import pool from "./database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const corsOptions: cors.CorsOptions = {
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.post("/signup", (req: Request, res: Response) => {
    const username: string = req.body["username"];
    const password: string = req.body["password"];

    const insertAccount: string = `
    INSERT INTO accounts (username, password)
    VALUES ('${username}', '${password}')
    `;

    pool.query(insertAccount)
        .then((response) => {
            console.log("Account Saved");
            console.log(response);
            res.json({ message: "Account saved successfully" });
        })
        .catch((err) => {
            console.error("Internal Server Error:", err);
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        });
});

const port: number = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
