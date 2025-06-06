function validarPassword(password) {
    if (typeof password !== 'string') return false; // Debe ser una cadena
    if (password.length < 8) return false; // Debe tener al menos 8 caracteres
    if (!/[A-Z]/.test(password)) return false; // Debe incluir al menos una mayúscula
    if (!/[a-z]/.test(password)) return false; // Debe incluir al menos una minúscula
    if (!/[0-9]/.test(password)) return false; // Debe incluir al menos un número
    if (!/[@#$%^&*]/.test(password)) return false; // Debe incluir al menos un carácter especial
    if (/\s/.test(password)) return false; // No debe contener espacios

    // Validación de palabra significativa
    const palabrasSignificativas = ['Mascota', '2024', 'Ciudad', 'Apodo'];
    if (!palabrasSignificativas.some(palabra => password.includes(palabra))) return false;

    return true;
}

module.exports = validarPassword;