"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosController = void 0;
const model_1 = require("../model/model");
class AlumnosController {
    static getStudents = (req, res) => {
        const querys = req.query;
        const alumnos = model_1.AlumnosModel.getStudents(querys);
        if (!alumnos)
            return res.status(404).json({ error: "NOT_FOUND_STUDENT" });
        res.json(alumnos);
    };
}
exports.AlumnosController = AlumnosController;
