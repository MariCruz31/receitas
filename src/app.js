import express, { json } from "express";
import index from "./routes/index.js";
import db from "./config/dbConnetct.js";
import receitas from "./routes/receita.js";
import chalk from "chalk";

const app = express();

app.use(json());
app.use("/", index);
app.use("/receitas", receitas);

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log(
        chalk.white.bgRgb(0, 128, 0).bold("Conexão com o banco feita com sucesso")
    );
});

export default app;
