import db from "../db/Notas.json";
import jsonfile from "jsonfile";

abstract class AlumnosModel {
    static getStudents = (query: any) => {
        const nombre = query.nombre;
        const materias = query.id;

        if (nombre) {
            const foundName = db.alumnos.find((n) => n.nombre.toLowerCase() === nombre.toLowerCase());

            if (foundName) {
                const { nombre, apellido, dni, telefono, curso, id } = foundName
                return { nombre, apellido, dni, telefono, curso, id };
            }
        }
        else if (materias) {
            const foundMaterias = db.alumnos.find((m) => m.id === materias);

            if (foundMaterias) {
                const { materias } = foundMaterias
                return { materias };
            }
        }

        return db.alumnos;


    }
}

export { AlumnosModel };