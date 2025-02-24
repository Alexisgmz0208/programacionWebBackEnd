import express from "express";

const app = express();
const port = 3000;

//enpoint es la ruta donde va ir a buscar nuestros recursos
app.get("/", (req, res  )=>{
    //console.log(req);
    res.send("<h1>Bienvenido a mi sitio web</h1>");
});
app.get("/about", (req, res  )=>{
    //console.log(req);
    res.send("<h1>Acerca de</h1>");
});
app.use("*", (req, res  )=>{
    //console.log(req);
    res.status(404).send("<h1>404 Not Found</h1>");
});


app.listen(port, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});


