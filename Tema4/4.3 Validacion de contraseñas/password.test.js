const validarPassword = require('./funcion-robusta');

describe('Pruebas exhaustivas de validación de contraseñas', () => {

    // Caso válido con todos los requisitos
    test('Contraseña válida con todos los criterios', () => {
        expect(validarPassword('Mascota@2024')).toBe(true);
    });

    // Menos de 8 caracteres
    test('Contraseña con menos de 8 caracteres debe ser inválida', () => {
        expect(validarPassword('Abc1@')).toBe(false);
    });

    // Sin mayúsculas
    test('Contraseña sin letra mayúscula debe ser inválida', () => {
        expect(validarPassword('mascota@2024')).toBe(false);
    });

    // Sin minúsculas
    test('Contraseña sin letra minúscula debe ser inválida', () => {
        expect(validarPassword('MASCOTA@2024')).toBe(false);
    });

    // Sin números
    test('Contraseña sin números debe ser inválida', () => {
        expect(validarPassword('Mascota@clave')).toBe(false);
    });

    // Sin carácter especial
    test('Contraseña sin caracteres especiales debe ser inválida', () => {
        expect(validarPassword('Mascota2024')).toBe(false);
    });

    // Sin palabra significativa
    test('Contraseña sin palabra significativa debe ser inválida', () => {
        expect(validarPassword('A@1bcd345')).toBe(false);
    });

    // Contiene espacios
    test('Contraseña con espacios debe ser inválida', () => {
        expect(validarPassword('Mi Clave@2024')).toBe(false);
    });

    // Vacía
    test('Contraseña vacía debe ser inválida', () => {
        expect(validarPassword('')).toBe(false);
    });

    // Parámetro indefinido
    test('Contraseña indefinida debe ser inválida', () => {
        expect(validarPassword(undefined)).toBe(false);
    });

    // Corrección de tipo (Número en lugar de cadena)
    test('Contraseña numérica debe ser inválida', () => {
        expect(validarPassword(12345678)).toBe(false);
    });
});