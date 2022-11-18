import express from "express";
import { getAllRooms, getRoom, createRoom, updateRoom, deleteRoom } from "../controllers/roomsController";
import { verifyAdmin } from "../utils/verifyToken";


const router = express.Router();
//READ
router.get("/", getAllRooms)
router.get("/:id", getRoom)
//CREATE
router.post("/", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id", verifyAdmin, deleteRoom)


export default router;