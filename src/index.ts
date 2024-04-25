import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { colegio } from "./db/Notas.json";
import { router } from "./router/estudiantesRouter";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.API_PORT! || 1234;

app.get("/api", (req, res) => {
    res.json(colegio)
})

app.use("/api/alumnos", router);

app.use("*", (req, res) => {
    res.status(404).json({ error: "recurso not found" })
});

app.listen(PORT, () => {
    console.log(`SERVER_LISTENING_ON_PORT -> http://localhost:${PORT}`)
});
