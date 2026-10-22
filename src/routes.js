const express = require("express")
const router = express.Router()
const usuario = require('./controllers/usuario')
const evento = require('./controllers/evento')

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/',rotaInicial)

router.get('/usuarios', usuario.listar)
router.post('/usuarios', usuario.cadastrar)
router.delete('/usuarios/:id', usuario.excluir)
router.put('/usuarios/:id', usuario.atualizar)

router.get('/eventos', evento.listar)
router.post('/eventos', evento.cadastrar)
router.delete('/eventos/:id',evento.excluir)
router.put('/eventos/:id',evento.atualizar)

router.get('/eventos/resumo', evento.resumo)

module.exports = router