import express from "express";
import { getData } from "./route.js";

const router = express.Router();

router.get("/", getData);

export default router;
