const body=require('body-parser')
const express=require('express')
const app=express()

app.use(express.static('.'))// Dentro da pasta atual no qual o arquivo server.js está sirva os arquivos estáticos. 
app.use(body.urlencoded({extended:true})) //se vier através de um submit de formulario os dados serão lidos s transformados em objeto
app.use(body.json()) //se vier  json dentro do body da req será transformado em objeto.

const multer=require('multer')
/* Multer é um middleware do Node.js usado junto com Express para lidar com upload de arquivos*/

/*Configurando multer e armazenamento */ 
let num =1
const storage=multer.diskStorage({
    
    destination:function(req,file,callback){
        callback(null,'./upload')

    },
    filename: function(req,file,callback){
        callback(null,`${num++}_${file.originalname}`)
    }
    
})

const upload = multer({storage}).single('arquivo')

app.post('/upload',(req,res)=>{ // o que vier vai ser interceptado pelo middleware ... 
    upload(req,res,erro=>{
        if(erro){
            return res.end(('Ocorreu um erro'))
        }

        res.end('Concluído com sucesso')
    })
})
/*Fim da configuração do multer e armazenamento */ 


/* Função que trata (metodo post) a  submissão de formulário a partir do método fetch*/ 
//action = formulario ? 

app.post('/formulario',(req,res)=>{
    res.send({
        ...req.body, //tudo o que veio no body
        id:1
    })

})












/*Fim da função que trata (metodo post) a  submissão de formulário a partir do método fetch*/ 


app.listen(8080,()=>console.log('Executando !!'))


    