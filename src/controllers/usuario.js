const con =require('../db')

const cadastrar = (req, res) => {
    const {nome, email, senha} = req.body

try{
    const query = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, password(?));'
    con.query(query, [nome, email, senha], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({error: 'Erro ao cadastrar usuário' })
          } else {
                const novoUsuario = req.body
                novoUsuario.id = results.insertId
                res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: novoUsuario })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Erro ao cadastrar usuário', details: 'Informe { nome, email, senha }' })
    }
}


const listar = (req, res) => {
    const sql ='SELECT * FROM usuario;'
    con.query(sql, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({error: 'Erro ao buscar usuários'})
        } else{
            res.json(results)
        }
    })
}

const atualizar = (req, res) => {
    const id = req.params.id;
    const {nome, email, senha} = req.body
    try{
        const sql = 'UPDATE usuario SET nome = ?, email = ?, senha = ?  WHERE id = ?;'
        con.query(sql, [nome, email, senha, id], (err, results)=>{
            if (err) {
                console.log(err)
                res.status(500).json({error: 'Erro ao atualizar usuários'})
            } else{
                const AtualizarUsuario = req.body
                AtualizarUsuario.id = results.insertId
                res.status(201).json({ message: 'Usuário atualizado com sucesso', user: AtualizarUsuario })
            }
        })
    }
    catch{
        console.error(error)
        res.status(400).json({ error: 'Erro ao atualizar usuário', details: 'Informe { nome, email, senha }' })
    }
}


const excluir = (req, res) => {
    const id = req.params.id;
    try{
    const sql = 'DELETE FROM usuario WHERE id like  ?;'
    con.query(sql, [id], (err, results) =>{
        if (err) {
            console.error(err)
            res.status(404).json({error: 'Erro ao deletar usuário' })
        } else{
           res.status(201).json({ message: 'Usuário deletado com sucesso'})
        }
    })
       } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Erro ao excluir usuário'})
        
    }
}


module.exports = {
    listar, cadastrar, atualizar, excluir
}