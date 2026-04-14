console.log('Hello, World!');

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import routerEquipos from './routes/equipos.js';
const app = express();
app.use(cors());


//Middleware para equipos
app.use('/api/equipos', routerEquipos)

app.get('/', (req, res) =>{
    console.log('Peticion recibida');
    res.send('Hola mundo!');
})

// app.get('/api/equipos', (req, res) => {
    //console.log('Peticion recibida en api/equipos');
    //res.json({
        //mensaje: "Lista de equipos",
        //equipos: [] 
    //})
//})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})