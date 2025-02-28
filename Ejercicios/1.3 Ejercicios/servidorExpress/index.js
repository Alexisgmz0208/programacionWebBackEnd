// import express from "express";
// import path from "path";

// const app = express();
// const port = 3000;

// // Rutas
// app.get("/", (req, res  )=>{
//     res.sendFile(path.join(__dirname,'./views/home.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname,'./views/about.html'));
// });

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname,'./views/contact.html'));
// });

// app.listen(port, () => {
//     console.log(`Servidor escuchando en http://localhost:${port}`);

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'views')));

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
