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

server.listen(3001, () => {
    console.log("Rodando")
});