import { Router } from "express";
import { Usuario } from "../models/Usuario.js";

export const routerUsuario = Router();

routerUsuario.post('/', async (req, res) => {
    const usuario = await Usuario.create(req.body);
    res.send(usuario);
});

routerUsuario.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.send(usuarios);
});

routerUsuario.get('/:id', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    res.send(usuario);
});

routerUsuario.put('/:id', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    await usuario.update(req.body);
    res.send(usuario);
});

routerUsuario.delete('/:id', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    await usuario.destroy();
    res.send({ message: 'Usuário deletado com sucesso' });
});

