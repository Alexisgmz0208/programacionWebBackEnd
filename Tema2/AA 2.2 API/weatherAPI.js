import axios from "axios";

const apiKey = "3eafaeab66f09e810ca0d0088e592331";
const city = "Mexico City";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const obtenerClima = async () => {
    try {
        const response = await axios.get(url);
        console.log("Datos del clima:", response.data);
    } catch (error) {
        console.error("Error al obtener el clima:", error.response?.data || error.message);
    }
};

obtenerClima();