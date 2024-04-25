"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const controller_1 = require("../controller/controller");
// import { authoriztion } from "../middlware/authorization";
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", controller_1.AlumnosController.getStudents);
