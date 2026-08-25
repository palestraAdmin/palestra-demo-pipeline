function sumar(a, b) {
  return a + b;
}
 
function restar(a, b) {
  return a - b;
}
 
console.log('Aplicacion de Palestra Sistemas ejecutandose correctamente');
console.log('2 + 3 =', sumar(2, 3));
console.log('5 - 3 =', restar(5, 3));
 
module.exports = { sumar, restar };
