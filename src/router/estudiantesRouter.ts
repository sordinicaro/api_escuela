import { AlumnosController } from "../controller/controller";
// import { authoriztion } from "../middlware/authorization";
import { Router } from "express";

const router = Router();

router.get("/", AlumnosController.getStudents);







export { router };