import axios from "axios";
import qs from "querystring";

const clientId = "75d29bb8203f439d802ebbe6ea299ce5";
const clientSecret = "679fd0b913744ea69b62565fbb1226e3";

const obtenerToken = async () => {
    try {
        const response = await axios.post("https://accounts.spotify.com/api/token", qs.stringify({
            grant_type: "client_credentials"
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`
            }
        });

        console.log("Token recibido:", response.data.access_token);
    } catch (error) {
        console.error("Error al obtener el token:", error.response?.data || error.message);
    }
};

obtenerToken();