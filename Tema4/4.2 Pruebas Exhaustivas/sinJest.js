/*function resta(a,b){
  return a-b;
}*/

const resta = (a,b)=>{
  return a-b;
}

// if(resta(2,5) !== -3){
//   console.log('Error en la operacion de resta');
// }


// Normal
// Decimales
// Frontera
// Frontera(Numeros Mayores)
// Fuera de Frontera
// Invalido no definido
// Invalido sin argumentos
// Por tipo nulo
// Por tipo cadena
// Por negativo(0)
// Por negativos ambos

console.group('Pruebas exhaustivas de resta');

//console.assert(resta(2,5) === -3, 'la resta de 2 - 5 debe ser -3');
console.log('La resta de 2 - 5 debe ser -3', resta(2,5));

// Decimales
console.log('La resta de 2.5 - 1.2 debe ser 1.3:', resta(2.5, 1.2));

// Frontera
console.log('La resta de 1 - 0 debe ser 1:', resta(1, 0));

// Frontera (Números Mayores)
console.log('La resta de frontera (numeros mayores):', resta((Number.MAX_SAFE_INTEGER), 1));

// Fuera de Frontera
console.log('La resta entre valores extremos:', resta((Number.MAX_SAFE_INTEGER*10), 2));

// Inválido no definido
console.log('La resta con undefined debe ser NaN:', resta(undefined, 5));

// Inválido sin argumentos
console.log('La resta sin argumentos debe ser NaN:', resta());

// Por tipo nulo
console.log('La resta con null debe ser NaN:', resta(null, 5));

// Por tipo cadena
console.log('La resta con una cadena debe ser NaN:', resta("hola", 5));

// Por negativo (0)
console.log('La resta de 5 - 0 debe ser 5:', resta(5, 0));

// Por negativos ambos
console.log('La resta de -5 - (-3) debe ser -2:', resta(-5, -3));

console.log('end');
console.groupEnd();