import express from "express";
import { register } from "../controllers/authsController.js";

const router = express.Router();

router.get("/register", register)

export default router;