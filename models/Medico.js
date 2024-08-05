import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";

const Medico = connection.define("medico", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    especialidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

