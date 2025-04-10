import axios from "axios";
import express from "express";

const app = express();
const puerto = 3000;

//middleware
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('http://api.zippopotam.us/MX/01000');
        const abbreviation = result.data["country abbreviation"]; 
        const country = result.data.country;
        res.render('index.ejs', {
            abbreviation:abbreviation,
            country:country,
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

