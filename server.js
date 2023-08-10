import app from "./src/app.js";
import chalk from "chalk";

const port = 8080

app.listen(port, () => {
    console.log(
        chalk.white.bgGreen.bold(`Servidor está rodando na porta ${port}`)
    );
});