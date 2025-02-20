//---1 comentarios y multilinea
//esto es un comentario
/*esto es un mentario 
multilinea*/

//---2 declarar variables
var a=8, b=5.0, c='alan';
console.log(a);
console.log(b);
console.log(c);

//----3- Creación de un array con elementos de diferentes tipos
var miArray = [
    42, // Número
    "Hola, mundo", // Cadena de texto
    true, // Booleano
    { nombre: "Juan", edad: 25 }, // Objeto
    [1, 2, 3] // Array
];

//----4. funcion que toma dos numeros y aplica una operacion
function operacion(a,b){
    console.log(a+b);
}

// operacion(a,b);

//---5. Funcion flecha que toma un string y lo imprime en mayusculas
const imprimirMayusculas = (cadena) => {
    console.log(cadena.toUpperCase());
};

// Ejemplo de uso
imprimirMayusculas("hola mundo"); // Imprimirá "HOLA MUNDO"

//--6. Bucle que imprima los numeros del 1 al 10
for(var i=0; i<=10; i++){
    console.log(i);
};

//----7. crear un objeto----

var coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "rojo",
    kilometraje: 15000,
    encendido: false,
    encender: function() {
        this.encendido = true;
        console.log("El coche está encendido.");
    },
    apagar: function() {
        this.encendido = false;
        console.log("El coche está apagado.");
    }
};

//----8.metodos para imprimir una descripcion del objeto----
console.log(coche.marca); // Imprimirá "Toyota"
coche.encender(); // Imprimirá "El coche está encendido."
console.log(coche.encendido); // Imprimirá "true"

//----10. simulacion asincronica y callback----
// Función que simula una operación asíncrona
function operacionAsincrona(callback) {
    console.log("Iniciando operación asíncrona...");

    // Simula un retraso de 3 segundos (3000 milisegundos)
    setTimeout(() => {
        const resultado = "Operación completada";
        callback(resultado);
    }, 3000);
}

// Función de callback que maneja el resultado
function manejarResultado(resultado) {
    console.log(resultado);
}

// Llamada a la función asíncrona
operacionAsincrona(manejarResultado);

//--11. Convertir una cadena a numero y manejar errores
function convertirACadenaANumero(cadena) {
    try {
        // Intentar convertir la cadena a número
        let numero = Number(cadena);

        // Comprobar si la conversión fue exitosa
        if (isNaN(numero)) {
            throw new Error("La conversión falló: la cadena no es un número válido.");
        }

        console.log("Conversión exitosa: el número es", numero);
    } catch (error) {
        // Manejar cualquier error que ocurra
        console.error("Error:", error.message);
    }
}

// Ejemplos de uso
convertirACadenaANumero("123"); // Imprimirá "Conversión exitosa: el número es 123"
convertirACadenaANumero("abc"); // Imprimirá "Error: La conversión falló: la cadena no es un número válido."