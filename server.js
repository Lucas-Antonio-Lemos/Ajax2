const body=require('body-parser')
const express=require('express')
const app=express()

app.use(express.static('.'))// Dentro da pasta atual no qual o arquivo server.js está sirva os arquivos estáticos. 
app.use(body.urlencoded({extended:true})) //se vier através de um submit de formulario os dados serão lidos s transformados em objeto
app.use(body.json()) //se vier  json dentro do body da req será transformado em objeto.

app.listen(8080,()=>console.log('Executando !!'))


    