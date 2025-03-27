import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

const materiaJSON = `[
    {
      "ID": "1",
      "Nombre": "Fundamentos de Diseño Web",
      "Descripción": "Exploración de conceptos básicos de diseño web.",
      "Palabras claves": ["HTML", "CSS", "Diseño"],
      "Prácticas": [
        {
          "Título": "Crea una página web básica",
          "Descripción": "Desarrolla una página usando solo HTML y CSS.",
          "Objetivo": "Familiarizarse con el uso de etiquetas HTML y estilos CSS."
        }
      ]
    },
    {
      "ID": "2",
      "Nombre": "Diseño Web Responsivo",
      "Descripción": "Adaptación de sitios web para dispositivos móviles y tablets.",
      "Palabras claves": ["Responsive", "Media Queries", "Flexbox"],
      "Prácticas": [
        {
          "Título": "Diseño adaptable",
          "Descripción": "Implementa media queries para diferentes resoluciones.",
          "Objetivo": "Comprender el diseño web responsivo."
        }
      ]
    },
    {
      "ID": "3",
      "Nombre": "Interactividad con JavaScript",
      "Descripción": "Añade dinámicas a tus páginas web mediante JavaScript.",
      "Palabras claves": ["JavaScript", "Eventos", "DOM"],
      "Prácticas": [
        {
          "Título": "Mejora de interactividad",
          "Descripción": "Crea eventos de clic para botones en un sitio web.",
          "Objetivo": "Introducir la manipulación del DOM."
        }
      ]
    },
    {
      "ID": "4",
      "Nombre": "Optimización y SEO",
      "Descripción": "Mejoras en el rendimiento web y posicionamiento en motores de búsqueda.",
      "Palabras claves": ["SEO", "Accesibilidad", "Optimización"],
      "Prácticas": [
        {
          "Título": "Optimización básica",
          "Descripción": "Aplica técnicas de SEO on-page a una página web.",
          "Objetivo": "Lograr un mejor rendimiento y accesibilidad."
        }
      ]
    }
  ]`;

const materiaAlumno = JSON.parse(materiaJSON);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/materia/:type",(req,res)=>{
    const elegirTema = materiaAlumno.find(r => r.Nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTema || { error: "materia no encontrada" });
});

app.listen(port,()=>{
    console.log("Servidor funcionando");
});