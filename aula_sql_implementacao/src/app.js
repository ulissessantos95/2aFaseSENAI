import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

//criar rota

app.get('/estudantesY', (req, res) =>{
    const sql = 'SELECT * FROM dados_estudantes'
    conexao.query(sql,(erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})

app.get('/estudantesY/:id', (req, res) =>{
    const id = req.params.id
    const sql = 'SELECT * FROM dados_estudantes WHERE id_estudante=?'
    conexao.query(sql, id, (erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})

app.post('/estudantesY', (req, res) =>{
    const estudante = req.body
    const sql = 'INSERT INTO dados_estudantes SET ?'
    conexao.query(sql, estudante, (erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})


app.delete('/estudantesY/:id', (req, res) =>{
    const id = req.params.id
    const sql = 'DELETE FROM dados_estudantes WHERE id_estudante=?'
    conexao.query(sql, id, (erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})


app.put('/estudantesY/:id', (req, res) =>{
    const id = req.params.id
    const estudante = req.body
    const sql = 'UPDATE dados_estudantes SET ? WHERE id_estudante=?'
    conexao.query(sql, [estudante, id], (erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})

export default app