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

//Crear usuario
app.post('/usuario', async(req,res)=>{
    try{
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    }catch(error){
        console.error("Error al crear el usuario:",error);
        res.status(500).json({error:"Error al crear el usuario"});
    }
});

//Actualizar usuario
app.put('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, req.body);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario);
        const usuarioActualizado = await Usuario.findById(id);
        res.status(200).json(usuarioActualizado); 
        console.log(usuarioActualizado);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//Eliminar Usuario
app.delete('/usuario/:id', async (req, res) => {
    try {
        const id = req.params.id; // Extraer el parámetro id de la URL
        const usuario = await Usuario.findByIdAndDelete(id);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({ mensaje: `Usuario con ID ${id} eliminado correctamente` });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(200).json({ error: 'Error interno del servidor' });
    }
});

//Mostrar todos los Usuarios
app.get('/usuarios', async (req,res)=>{
    try{
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    }catch(error){
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios'});
    }
});

//consultar usuario por ID
app.get('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        console.error('Error al consultar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
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