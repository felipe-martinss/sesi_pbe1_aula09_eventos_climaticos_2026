const con = require('../db')

const cadastrar = (req,res)=>{
    const {usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto} = req.body

    try{
        const query = 'INSERT INTO evento (usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto) VALUES (?, ?, ?, ?, ? ,?);'
        con.query(query, [usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto], (err, results)=>{
            if (err){
                console.log(err)
                res.status(500).json({error: 'Erro ao cadastrar evento' })
            } else {
                const novoEvento = req.body
                novoEvento.id = results.insertId
                res.status(201).json({message: 'Evento cadastrado com sucesso', })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({error: 'Erro ao cadastrar Evento', details: 'Informe {usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto}' })
    }
}

const atualizar = (req, res) => {
    const id = req.params.id;
    const {usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto} = req.body
    try{
        const sql = 'UPDATE evento SET usuarioId = ?, cidade = ?, tipoEvento = ?, temperaturaMaxima = ?, data = ?, nivelImpacto = ? WHERE id = ?;'
        con.query(sql, [usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto, id], (err, results) => {
            if (err) {
                console.log(err)
                res.status(500).json({error: 'Erro ao atualizar usuarios'})
            } else{
                const AtualizarEvento = req.body
                AtualizarEvento.id = results.insertId
                res.status(201).json({ message: 'Evento atualizado com sucesso', user: AtualizarEvento})
            }
        })
    }
     catch{
        console.error(error)
        res.status(400).json({ error: 'Erro ao atualizar evento', details: 'Informe { usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto }' })
    }
}

const excluir = (req,res) => {
    const id = req.params.id;
    try{
        const sql = 'DELETE FROM evento WHERE id like ?;'
        con.query(sql, [id], (err, results) => {
            if (err) {
                console.error(err)
                res.status(404).json({error: 'Erro ao deletar evento'})
            } else{
                res.status(201).json({message: 'Evento deletado com sucesso'})
            }
        })
    } catch (error){
        console.error(error)
        res.status(404).json({ error: 'Erro ao excluir usuário'})
    }
}

const listar = (req, res) => {
    const sql = 'SELECT * FROM evento;'
    con.query(sql, (err, results) => {
        if (err){
            console.error(err)
            res.status(500).json({error : 'Erro ao buscar eventos'})
        } else{
            res.json(results)
        }
    })
}

const resumo = (req, res) =>{
   const query1 = 'SELECT AVG(temperaturaMaxima) AS media_temperaturas FROM evento;'
   con.query(query1, (err, results)=>{
    if (err){
        console.error(err)
        res.status(500).json({error: 'Erro ao fazer a média temperaturas'})
    } else{
        res.json(results)
    }
   }) 
}

module.exports = { 
    listar, cadastrar, atualizar, excluir, resumo
}