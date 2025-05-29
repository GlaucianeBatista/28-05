import express from "express";
app.use(express.json())
const app = express()

const Estoque = []
app.post ('/Estoque',(req, res) => {
    console.log (req)
    resizeBy.send('Ók, aqui está certo')
})
const aluno = []
app.post('/Aluno', (req, res)=> {
    res.send ('Ok, deu bom')
})
const lista = []
app.post ('/Lista',(req, res) => {
    console.log (req)
    resizeBy.send('Ók, aqui está certo')
})

app.listen (3000);