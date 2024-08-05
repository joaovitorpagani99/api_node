import { Medico } from "../models/Medico";
import { routerMedico } from "express";

export const routerMedico = Router();

routerMedico.post('/', async (req, res) => {
    const medico = await Medico.create(req.body);
    res.send(medico);
});

routerMedico.get('/', async (req, res) => {
    const medicos = await Medico.findAll();
    res.send(medicos);
});

routerMedico.get('/:id', async (req, res) => {
    const medico = await Medico.findByPk(req.params.id);
    res.send(medico);
});

routerMedico.put('/:id', async (req, res) => {
    const medico = await Medico.findByPk(req.params.id);
    await medico.update(req.body);
    res.send(medico);
});

routerMedico.delete('/:id', async (req, res) => {
    const medico = await Medico.findByPk(req.params.id);
    await medico.destroy();
    res.send({ message: 'Médico deletado com sucesso' });
});

