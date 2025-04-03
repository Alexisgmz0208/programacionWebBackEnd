import axios from "axios";

const token = "BQAyBsEeA6aBJ97pLsvOh41eAtVWvb9N157ByqaWxB47EZQbO4tFJISsfG0S65uAj6ahQ4KmKdOOsDKyx0u186rJwB9AouyMJmpDooQm950LDExqH9GLE5HKnSnN2h_nGFGpuFyUk9Q";
const obtenerDatosArtista = async () => {
    try {
        const response = await axios.get("https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU", { // ID del artista Coldplay
            headers: { Authorization: `Bearer ${token}` }
        });

        console.log("Datos del artista:", response.data);
    } catch (error) {
        console.error("Error al obtener datos:", error.response?.data || error.message);
    }
};

obtenerDatosArtista();