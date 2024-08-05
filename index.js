import { connection, authenticate } from "./config/database.js";
import { Medico } from "./models/Medico.js";
import { Usuario } from "./models/Usuario.js";
import { Consulta } from "./models/Consulta.js";

authenticate(connection).then(() => {
    connection.sync({
        force: trues
    });
});