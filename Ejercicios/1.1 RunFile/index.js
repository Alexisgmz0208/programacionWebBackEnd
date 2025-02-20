console.log('probando node.js');

//9. Usando modulo desde otro archivo
import { sumar, restar, multiplicar, dividir } from './ModuloOperaciones.js';

const a = 10;
const b = 5;

console.log(`La suma de ${a} y ${b} es: ${sumar(a, b)}`);
console.log(`La resta de ${a} y ${b} es: ${restar(a, b)}`);
console.log(`La multiplicación de ${a} y ${b} es: ${multiplicar(a, b)}`);
console.log(`La división de ${a} entre ${b} es: ${dividir(a, b)}`);