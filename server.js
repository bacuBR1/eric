const express = require("express");
const server = express();

server.get('/', (req,res) => {
    res.send("Testando express")
});

server.get('/sobre', (req, res) => {
    res.send("sobre a aplicação: ...")
})

server.listen(3001, () => {
    console.log("Rodando")
});