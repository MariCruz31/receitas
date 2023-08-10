import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema({
 nome: { type: String, required: true},
 tempo_de_cozimento: { type: String, required: true},
 ingredientes: { type:[String], required: true},
 modo_de_preparo: { type: String, required: true},  
});

const Receita = mongoose.model("Receita",receitaSchema);

export default Receita;