import express from 'express';

const app = express();
app.use(express.json())



const clientes = [ 
    {id: 1,nome: "neto",cpf: "123.123.123.85"},
    {id: 2,nome: "Caio",cpf: "123.123.123.85"},
    {id: 3,nome: "Vitor",cpf: "123.123.123.85"}
]





 
app.get('/',(req,res)=>{
    res.status(200).send("Pagina Inicial")
})
app.get('/clientes',(req,res)=>{
    res.status(200).json(clientes)
    
})
app.post('/clientes',(req,res)=>{
    clientes.push(req.body)
    res.status(200).send("Cliente cadastrado com sucesso")
})

//realizar busca por id
function buscarCliente(id){
    return clientes.findIndex(clientes => clientes.id == id)
}

//cosultar clientes por id
app.get('/clientes/:id',(req,res) =>{

})

app.put('/clientes/:id',(req,res)=> { 
    let index = buscarCliente(req.params.id)
    clientes[index] = req.body    
    res.json(clientes)
})


app.delete('/clientes/:id',(req,res)=>{
    let index = buscarCliente(req.params.id)
    clientes.splice(index, 1)
    res.send("clientes excluidos com sucesso!")  
})




export default app 