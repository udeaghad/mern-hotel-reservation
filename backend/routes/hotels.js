import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updatedHotel } from "../controllers/hotelsController.js";
// import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createHotel)
//UPDATE
router.put("/:id", updatedHotel)
//DELETE
router.delete("/:id", deleteHotel)
//GET
router.get("/:id", getHotel)
//GET ALL

router.get("/", getAllHotels)

export default router;