"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosController = void 0;
const model_1 = require("../model/model");
class AlumnosController {
    static getInfo = (req, res) => {
        const alumnos = model_1.AlumnosModel.getInfo();
        if (!alumnos)
            return res.status(404).json({ error: "NOT_FOUND_CHARACTER" });
        res.json(alumnos);
    };
}
exports.AlumnosController = AlumnosController;
