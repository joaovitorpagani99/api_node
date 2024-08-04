import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

config();


export const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);


export async function authenticate(connection) {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
}