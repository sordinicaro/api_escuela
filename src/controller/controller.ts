import { Request, Response } from "express";
import { AlumnosModel } from "../model/model";
import { randomUUID } from "node:crypto";


abstract class AlumnosController {
    static getStudents = (req: Request, res: Response) => {
        const querys = req.query;
        const alumnos = AlumnosModel.getStudents(querys);
        if (!alumnos) return res.status(404).json({ error: "NOT_FOUND_STUDENT" });
        res.json(alumnos);
    }
}


export { AlumnosController };
