import express, { Request, Response } from "express";
import cors from "cors";
import  pool from "./database"; 


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

app.post("/login", (req: Request, res: Response) => {
    const username: string = req.body["username"];
    const password: string = req.body["password"];

    const findAccount: string = `
        SELECT * FROM accounts
        WHERE username = '${username}' AND password = '${password}'
    `;

    pool.query(findAccount)
        .then((result) => {
            if (result.rows.length > 0) {
                console.log("Login successful");
                res.json({ message: "Login successful" });
            } else {
                console.log("Invalid credentials");
                res.status(401).json({ error: "Invalid credentials" });
            }
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
