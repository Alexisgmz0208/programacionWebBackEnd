import express from "express";
import bodyParser from "body-parser";
import { error } from "console";

const app = express();
const port = 3000;

const recetaJSON = `[
    {
        "id":"0001",
        "tipo":"taco",
        "nombre":"Taco lechon",
        "precio":20.00,
        "ingredientes":{
            "proteina":{
                "nombre":"Puerco",
                "preparacion":"Horneado" 
            },
            "salsa":{
                "nombre":"Tomate verde",
                "picor":"Medio"
            },
            "acompañamientos":[
                {
                    "nombre":"Cebolla",
                    "cantidad":"1 Cucharada",
                    "ingredientes":["Cebolla Blanca","Cilantro","Naranja","Sal"]
                },
                {
                    "nombre":"Guacamole",
                    "cantidad":"2 Cucharadas",
                    "ingredientes":["Aguacate","Jugo de Limon","Sal","Cebolla","Cilantro"]
                }
            ]
        }
    },
    {
        "id":"0002",
        "tipo":"tostada",
        "nombre":"Tostada Ceviche",
        "precio":35.00,
        "ingredientes":{
            "proteina":{
                "nombre":"Camaron",
                "preparacion":"Cocido" 
            },
            "salsa":{
                "nombre":"Chipotle",
                "picor":"Medio"
            },
            "acompañamientos":[
                {
                    "nombre":"Pico de gallo",
                    "cantidad":"1 Cucharada",
                    "ingredientes":["Tomate Rojo","Cebolla Blanca","Chile Jalapeño","Cilantro","jugo de limon","Sal"]
                },
                {
                    "nombre":"Ensalada de repollo",
                    "cantidad":"1 Cucharada",
                    "ingredientes":["Repollo","Cebolla","Zanahoria","Jugo de limon","Oregano","Sal"]
                }
            ]
        }
    },
    {
        "id":"0003",
        "tipo":"Filete",
        "nombre":"Filete Empanizado",
        "precio":150.00,
        "ingredientes":{
            "proteina":{
                "nombre":"Pescado",
                "preparacion":"Frito" 
            },
            "salsa":{
                "nombre":"Poblana Cremosa",
                "picor":"Bajo"
            },
            "acompañamientos":[
                {
                    "nombre":"Arroz",
                    "cantidad":"3 Cucharadas",
                    "ingredientes":["Arroz blanco","lata de verduras picadas","Aromáticos","Especias","Aceite"]
                },
                {
                    "nombre":"Frijoles Refritos",
                    "cantidad":"2 Cucharadas",
                    "ingredientes":["Frijoles","Cebolla","Ajo","Sal","Grasa o Aceite"]
                }
            ]
        }
    },
    {
        "id":"0004",
        "tipo":"Carnes picadas",
        "nombre":"Salpicon de pollo",
        "precio":100.00,
        "ingredientes":{
            "proteina":{
                "nombre":"Pollo",
                "preparacion":"Rostizado" 
            },
            "salsa":{
                "nombre":"Vinagreta",
                "picor":"Bajo"
            },
            "acompañamientos":[
                {
                    "nombre":"Arroz",
                    "cantidad":"2 Cucharadas",
                    "ingredientes":["Arroz blanco","lata de verduras picadas","Aromáticos","Especias","Aceite"]
                },
                {
                    "nombre":"Guacamole",
                    "cantidad":"1 Cucharada",
                    "ingredientes":["Aguacate","Jugo de Limon","Sal","Cebolla","Cilantro"]
                }
            ]
        }
    }
    
]`;


const recetasTacos = JSON.parse(recetaJSON);


app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/receta/:type",(req,res)=>{
    const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || { error: "receta no encontrada" });
});

app.listen(port,()=>{
    console.log("Servidor funcionando");
});
