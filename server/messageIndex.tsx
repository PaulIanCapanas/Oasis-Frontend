import express from "express";
import http from "http"
import cors from "cors"
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on("disconnect", () => console.log("user disconnected"));
})

server.listen(5000, () => console.log("server is running at port 5000"));