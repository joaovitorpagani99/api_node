import { connection } from "../config/database";
import { DataTypes } from "sequelize";


export const Usuario = connection.define("Usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone : {
        type: DataTypes.STRING,
        allowNull: false,
    }
})