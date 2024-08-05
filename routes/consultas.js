import { Router } from "express";
import { Consulta } from "../models/Consulta.js";

export const routerConsulta = Router();

routerConsulta.post('/', async (req, res) => {
    const consulta = await Consulta.create(req.body);
    res.send(consulta);
});

routerConsulta.get('/', async (req, res) => {
    const consultas = await Consulta.findAll({ include: ['Usuario', 'Medico'] });
    res.send(consultas);
});

routerConsulta.get('/:id', async (req, res) => {
    const consulta = await Consulta.findByPk(req.params.id, { include: ['Usuario', 'Medico'] });
    res.send(consulta);
});

routerConsulta.put('/:id', async (req, res) => {
    const consulta = await Consulta.findByPk(req.params.id);
    await consulta.update(req.body);
    res.send(consulta);
});

routerConsulta.delete('/:id', async (req, res) => {
    const consulta = await Consulta.findByPk(req.params.id);
    await consulta.destroy();
    res.send({ message: 'Consulta deletada com sucesso' });
});
