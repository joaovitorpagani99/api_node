import { connection, authenticate } from "./config/database.js";
import { Medico } from "./models/Medico.js";
import { Usuario } from "./models/Usuario.js";
import { Consulta } from "./models/Consulta.js";
import express from "express";
import { routerUsuario } from "./routes/usuarios.js";
import { routerConsulta } from "./routes/consultas.js";
import { routerMedico } from "./routes/medicos.js";

authenticate(connection).then(() => {
    connection.sync({
        force: true
    });
});

const app = express();

app.use(routerMedico);
app.use(routerConsulta);
app.use(routerUsuario);

app.get("/", (req, res) => {
    res.send("api funcionando")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})