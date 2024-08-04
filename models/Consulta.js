import { connection } from "../config/database";
import { DataTypes } from "sequelize";

export const Consulta = connection.define("Consulta", {
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    medico: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    especialidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});