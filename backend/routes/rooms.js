import express from "express";
import { getAllRooms, getRoom, createRoom, updateRoom, deleteRoom } from "../controllers/roomsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
//READ
router.get("/", getAllRooms)
router.get("/:id", getRoom)
//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)


export default router;