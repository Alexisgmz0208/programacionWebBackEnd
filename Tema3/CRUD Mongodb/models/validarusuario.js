const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos

export function validarUsuario(datos) {
    let errores = {}; // Objeto para almacenar errores de validación

    // Validar el nombre
    if (!datos.nombre || typeof datos.nombre !== 'string' || datos.nombre.length < 3 || datos.nombre.length > 50) {
        errores.nombre = 'El nombre debe ser una cadena de texto y tener entre 3 y 50 caracteres.';
    }

    // Validar la edad
    datos.edad = Number(datos.edad); // Convertir a número
    if (!datos.edad || typeof datos.edad !== 'number' || datos.edad < 1 || datos.edad > 120) {
        errores.edad = 'La edad debe ser un número entre 1 y 120 años.';
    }

    // Validar el correo electrónico
    if (!datos.correo || typeof datos.correo !== 'string' || !correoRegex.test(datos.correo)) {
        errores.correo = 'Correo inválido. Debe tener un formato correcto como "ejemplo@correo.com".';
    }

    return Object.keys(errores).length > 0 ? errores : null; // Retorna null si los datos son válidos
}