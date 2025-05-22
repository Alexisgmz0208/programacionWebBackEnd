import { MongoClient, ObjectId } from "mongodb";
import express from "express";
import dotenv from "dotenv";
import { validarUsuario } from "./models/validarusuario.js";

dotenv.config();
const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la API CRUD');
});

// Configuración de MongoDB Atlas
const uri = process.env.uri;
const client = new MongoClient(uri);
let db;

// Establecer conexión a MongoDB Atlas al iniciar el servidor
async function conectarDB() {
    try {
        await client.connect();
        db = client.db('test');
        console.log('Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
    }
}
conectarDB();

// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        if (!db) return res.status(500).json({ error: 'No se pudo conectar a la base de datos' });

        const usuarios = await db.collection('usuarios').find().toArray();
        res.json(usuarios);
    } catch (error) {
        console.error('Error en GET /usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});
-
// Obtener un usuario por ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        if (!db) return res.status(500).json({ error: 'No se pudo conectar a la base de datos' });

        const id = req.params.id;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'ID inválido, debe ser un ObjectId válido' });

        const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });

        if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

        res.json(usuario);
    } catch (error) {
        console.error('Error en GET /usuarios/:id:', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

// Crear un usuario
app.post('/usuarios', async (req, res) => {
    try {
        const errores = validarUsuario(req.body);
        if (errores) return res.status(400).json({ error: errores });

        if (!db) return res.status(500).json({ error: 'No se pudo conectar a la base de datos' });

        const usuario = { ...req.body, createdAt: new Date(), updatedAt: new Date() };
        const result = await db.collection('usuarios').insertOne(usuario);

        res.status(201).json({ _id: result.insertedId, ...usuario });
    } catch (error) {
        console.error('Error en POST /usuarios:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// Actualizar un usuario por ID
app.put('/usuarios/:id', async (req, res) => {
    try {
        const errores = validarUsuario(req.body);
        if (errores) return res.status(400).json({ error: errores });

        if (!db) return res.status(500).json({ error: 'No se pudo conectar a la base de datos' });

        const id = req.params.id;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'ID inválido, debe ser un ObjectId válido' });

        const resultado = await db.collection('usuarios').updateOne(
            { _id: new ObjectId(id) },
            { $set: { ...req.body, updatedAt: new Date() } }
        );

        if (resultado.modifiedCount === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

        // Obtener el usuario actualizado para enviarlo en la respuesta
        const usuarioActualizado = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });

        res.json(usuarioActualizado);
    } catch (error) {
        console.error('Error en PUT /usuarios:', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

// Eliminar un usuario por ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
        if (!db) return res.status(500).json({ error: 'No se pudo conectar a la base de datos' });

        const id = req.params.id;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'ID inválido, debe ser un ObjectId válido' });

        const result = await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

        res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error en DELETE /usuarios:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

// Iniciar el servidor
app.listen(puerto, () => console.log(`Servidor en ejecución en http://localhost:${puerto}`));