function validarPassword(password) {
    if (!password || password.length < 8) return false; // Solo verifica longitud mínima

    return true; // No valida mayúsculas, números, caracteres especiales, espacios, etc.
}

module.exports = validarPassword;