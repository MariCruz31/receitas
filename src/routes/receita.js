import express from "express";
import ReceitaController from "../controllers/receitaController.js";

const router = express.Router();

router
.get("/", ReceitaController.getAllReceitas)
.post("/", ReceitaController.createReceitas)
.put("/:id", ReceitaController.updateReceitas)
.get("/:id", ReceitaController.getByIdReceitas)
.delete("/:id", ReceitaController.deleteReceitas)
.delete("/", ReceitaController.deleteAllReceitas);

export default router;