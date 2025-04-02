import axios from "axios";

const obtenerUsuario = async (token) => {
    try {
        const response = await axios.get("https://reqres.in/api/users/4", {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log("Datos del usuario:", response.data);
    } catch (error) {
        console.error("Error al obtener datos:", error.response?.data || error.message);
    }
};


obtenerUsuario("QpwL5tke4Pnpja7X4");