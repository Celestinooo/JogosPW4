const express = require("express");
const bodyparser = require("body-parser");
const banco = require("./db.js");
const porta = 8888;
const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

(async ()=>{
    await banco.sync();
})()

app.use("/jogo", require("./jogo_route.js"));
app.use("/empresa", require("./empresa_route.js"));

app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`);
})
