import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updatedHotel } from "../controllers/hotelsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
// import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel)
//UPDATE
router.put("/:id", verifyAdmin, updatedHotel)
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)
//GET
router.get("/:id", getHotel)
//GET ALL

router.get("/", getAllHotels)

export default router;