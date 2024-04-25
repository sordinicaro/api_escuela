"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosModel = void 0;
const Notas_json_1 = __importDefault(require("../db/Notas.json"));
class AlumnosModel {
    static getInfo = () => {
        return Notas_json_1.default.alumnos;
    };
}
exports.AlumnosModel = AlumnosModel;
