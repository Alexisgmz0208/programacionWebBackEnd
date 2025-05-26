const suma = require('./suma');

test('suma 1 + 2 es igual a 3', ()=>{
    expect(suma(1,2)).toBe(3);
});

// a) Igualdad exacta con toBe
function sumaigual(a, b) {
    return a + b;
}

test('10 + 10 debe ser igual a 20', () => {
    expect(sumaigual(10, 10)).toBe(20);
});

// b) Comparación de objetos con toEqual
function obtenerUsuario() {
    return { nombre: "Juan", edad: 30 };
}

test('Dos objetos con los mismos valores deben ser iguales', () => {
    expect(obtenerUsuario()).toEqual({ nombre: "Juan", edad: 30 });
});

// c) Verificación de valores nulos y definidos
const valorNulo = null;
const valorIndefinido = undefined;
const valorDefinido = "Hola";

test('La variable debe ser nula', () => {
    expect(valorNulo).toBeNull();
});

test('La variable debe ser indefinida', () => {
    expect(valorIndefinido).toBeUndefined();
});

test('La variable debe estar definida', () => {
    expect(valorDefinido).toBeDefined();
});

// d) Comparaciones numéricas
test('5 debe ser mayor que 3', () => {
    expect(5).toBeGreaterThan(3);
});

test('3 debe ser menor que 5', () => {
    expect(3).toBeLessThan(5);
});

test('5 debe ser mayor o igual a 5', () => {
    expect(5).toBeGreaterThanOrEqual(5);
});

// e) Coincidencia de cadenas con Expresiones Regulares
const mensaje = "Bienvenido al curso de Jest";

test('El mensaje debe contener la palabra "curso"', () => {
    expect(mensaje).toMatch(/curso/);
});

// f) Verificación de Contenido en Arrays
const frutas = ["manzana", "pera", "banana"];

test('El array debe contener "pera"', () => {
    expect(frutas).toContain("pera");
});

// g) Negación de Matchers con .not.toBe
test('5 no debe ser igual a 10', () => {
    expect(5).not.toBe(10);
});

// h) Pruebas Asíncronas con Promesas
function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos cargados"), 1000);
    });
}

test('Debe resolver con "Datos cargados"', async () => {
    await expect(obtenerDatos()).resolves.toBe("Datos cargados");
});