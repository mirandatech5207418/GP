import express from "express";
import {
  getAllHoteleiros,
  createHoteleiro,
} from "../controllers/hoteleiroController.js";

const router = express.Router();

router.get("/", getAllHoteleiros);
router.post("/", createHoteleiro);

export default router;
