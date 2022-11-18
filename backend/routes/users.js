import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is users endpoint")
})

export default router;