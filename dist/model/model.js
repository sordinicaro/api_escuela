"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosModel = void 0;
const Notas_json_1 = __importDefault(require("../db/Notas.json"));
class AlumnosModel {
    static getStudents = (query) => {
        const nombre = query.nombre;
        const materias = query.id;
        if (nombre) {
            const foundName = Notas_json_1.default.alumnos.find((n) => n.nombre.toLowerCase() === nombre.toLowerCase());
            if (foundName) {
                const { nombre, apellido, dni, telefono, curso, id } = foundName;
                return { nombre, apellido, dni, telefono, curso, id };
            }
        }
        else if (materias) {
            const foundMaterias = Notas_json_1.default.alumnos.find((m) => m.id === materias);
            if (foundMaterias) {
                const { materias } = foundMaterias;
                return { materias };
            }
        }
        return Notas_json_1.default.alumnos;
    };
}
exports.AlumnosModel = AlumnosModel;
