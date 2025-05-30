const resta = require('./resta'); // Ajusta el nombre si es necesario


describe('Pruebas exhaustivas de resta', () => {


    //Normal
    test('la resta de 2 - 5 debe ser igual a -3',()=>{
        expect(resta(2,5)).toBe(-3);
    });
    
    // Decimales
    test('La resta de 2.5 - 1.2 debe ser 1.3', () => {
        expect(resta(2.5, 1.2)).toBe(1.3);
    });

    // Frontera
    test('La resta de 1 - 0 debe ser 1', () => {
        expect(resta(1, 0)).toBe(1);
    });

    // Frontera (Números Mayores)
    test('La resta de frontera (numeros mayores)', () => {
        expect(resta(999999, 1)).toBe(999998);
    });

    // Fuera de Frontera
    test('La resta entre valores extremos debe ser correcta', () => {
        expect(resta((Number.MAX_SAFE_INTEGER*10), 2)).toBe((Number.MAX_SAFE_INTEGER*10)- 2);
    });

    // Inválido no definido
    test('La resta con undefined debe ser NaN', () => {
        expect(resta(undefined, 5)).toBeNaN();
    });

    // Inválido sin argumentos
    test('La resta sin argumentos debe ser NaN', () => {
        expect(resta()).toBeNaN();
    });

    // Por tipo nulo
    test('La resta con null debe ser NaN', () => {
        expect(resta(null, 5)).toBeNaN();
    });

    // Por tipo cadena
    test('La resta con una cadena debe ser NaN', () => {
        expect(resta("hola", 5)).toBeNaN();
    });

    // Por negativo (0)
    test('La resta de 5 - 0 debe ser 5', () => {
        expect(resta(5, 0)).toBe(5);
    });

    // Por negativos ambos
    test('La resta de -5 - (-3) debe ser -2', () => {
        expect(resta(-5, -3)).toBe(-2);
    });
});