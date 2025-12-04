const express = require("express")
const app = express()

//
app.get("/", function (req, res) {
    res.send("esta online")
})

let listaDePedido = [
    {
        "id": 1,
        "codigo": 1,
        "cliente": "Maria Eduarda",
        "id_cliente": 100,
        "produto": "x-bacon",
        "valor": 29.9
    },
    {
        "id":2,
        "cliente":"Maria Eduarda", 
        "id_cliente":100,
        "produto": "x-salada",
        "valor":25.9
    },
    {
        "id":3,
        "cliente":"Keila",
        "id_cliente":85,
        "produto":"x-fominha",
        "valor":39.9
    }
]
//listar 
app.get("/listarpedidos", function (req, res) {
    res.send(listaDePedido)
})

//listar um 
app.get("/listarpedido/:id",function(req, res){
    let idInformado = req.params.id
    if(idInformado > listaDePedido.length){
        res.send("Pedido invalido")
    }else{
        res.send(listaDePedido[idInformado-1])
    }
   
})

app.listen(3000)
//localhost:3000