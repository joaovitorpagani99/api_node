import { connection } from "../config/database";
import { DataTypes } from "sequelize";

const Medico = connection.define("Medico", {
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