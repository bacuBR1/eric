const express = require("express");
const server = express();
server.use(express.json())

server.get('/', (req,res) => {
    res.send("Testando express")
});

server.get('/sobre', (req, res) => {
    res.send("sobre a aplicação: ...")
})

server.get('/3', (req, res) => {
    res.json({
            "email": "contato@email.com",
            "telefone": "(81) 99999-9999"
        })
})

server.get("/erro", (req, res) => {
    res.status(404).send("pagina não encontrada")
})

server.get("/inicio", (req, res) => {
    res.redirect('/')
})

server.get('/usuario/:id', (req, res) => {
    const id = req.params.id

    res.send(`usuario ${id}`)
})

server.listen(3001, () => {
    console.log("Rodando")
});