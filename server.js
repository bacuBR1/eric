const express = require("express");
const server = express();

server.get('/', (req,res) => {
    res.send("Testando express")
});

server.listen(3001, () => {
    console.log("Rodando")
});