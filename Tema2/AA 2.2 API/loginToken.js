import axios from "axios";

const login = async () => {
    try {
        const response = await axios.post("https://reqres.in/api/login", {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        });
        console.log("Token recibido:", response.data.token);
    } catch (error) {
        console.error("Error en autenticación:", error.response?.data || error.message);
    }
};

login();