import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'


const app = express()
app.use(express.json())



app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)



/* 3 rotas

Publicas 
        Cadatros e Login


Privadas 
        Listar Usuarios*/


app.listen(3000, () => console.log("Servidor Rodando"))
//console.log("Servidor Rodando")



//vihcamargo
//GbqhyIASDRHDCdtE
//mongodb+srv://vihcamargo:GbqhyIASDRHDCdtE@users.eqcoxmx.mongodb.net/?retryWrites=true&w=majority&appName=Users