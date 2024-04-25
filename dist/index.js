"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Notas_json_1 = require("./db/Notas.json");
const estudiantesRouter_1 = require("./router/estudiantesRouter");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
const PORT = process.env.API_PORT || 1234;
app.get("/api", (req, res) => {
    res.json(Notas_json_1.colegio);
});
app.use("api/alumnos", estudiantesRouter_1.router);
app.use("*", (req, res) => {
    res.status(404).json({ error: "recurso not found" });
});
app.listen(PORT, () => {
    console.log(`SERVER_LISTENING_ON_PORT -> http://localhost:${PORT}`);
});
