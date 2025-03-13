import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));

console.log(_dirname);

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.send("<h1>Datos Recibidos</h1>");
});

app.listen(port,()=>{
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});