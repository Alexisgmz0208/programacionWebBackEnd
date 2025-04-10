import axios from "axios";
import express from "express";

const app = express();
const puerto = 3000;

//middleware
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Programming?lang=es&type=single');
        const joke = result.data.joke; 
        const Category = result.data.Category;
        res.render('index.ejs', {
            joke: joke,
            Category: Category,
        });
        console.log(result.data);

        
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error al obtener la cita');
    }
})

app.listen(puerto, () => {
    console.log(`Server running on port ${puerto}`);
    });

