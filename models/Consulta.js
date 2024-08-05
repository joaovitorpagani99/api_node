import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Usuario } from "./Usuario.js";
import { Medico } from "./Medico.js";

export const Consulta = connection.define("consulta", {
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Consulta.hasOne(Medico, { onDelete: "CASCADE" });
Medico.belongsTo(Consulta);

Consulta.hasOne(Usuario, { onDelete: "CASCADE" });
Usuario.belongsTo(Consulta);