import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Usuario from "./models/usuario.model.js";

dotenv.config();
const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('Bienvenidio a mi API CRUD');
});

app.post('/usuario', async(req,res)=>{
    try{
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    }catch(error){
        console.error("Error al crear el usuario:",error);
        res.status(500).json({error:"Error al crear el usuario"});
    }
});

app.listen(puerto,()=>{
    console.log(`servidor escuchando en https://localhosto:${puerto}`);
});

// conexion a la base de datos de mongodb

// define uri trayendo desde archivo env
const uri = process.env.uri;

mongoose.connect(uri)
.then(()=>{
    console.log("Conexion exitosa a la base de datos");
})
.catch((error)=>{
    console.log("Error en la conexion a la base de datos",error);
});