import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res  )=>{
    //console.log(req);
    res.send("<h1>Hola Mundo</h1>");
});

app.post("/registro", (req, res  )=>{
    //console.log(req);
    res.status(201).send("<h1>Registro Exitoso</h1>");
});
app.put("/usuario/actualizar", (req, res  )=>{
    //console.log(req);
    res.status(200).send("<h1>Actualizacion Exitosa</h1>");
});
app.patch("/usuario/modificar", (req, res  )=>{
    //console.log(req);
    res.status(200).send("<h1>Modificacion Exitosa</h1>");
});

app.delete("/usuario/eliminar", (req, res  )=>{
    //console.log(req);
    res.status(200).send( "<h1>Eliminación Exitosa</h1>");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}/`);
});
  