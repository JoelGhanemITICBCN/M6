document.write("<h1>Resultados de las operaciones del array</h1>");

// Crear un array
let colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];

// Comprovem si tots els colors són menors que 'marró'
let allLessThanBrown = colors.every(color => color < 'marró');
document.write("<p>Tots els colors són menors que 'marró': " + allLessThanBrown + "</p>");

// Retornem els colors que són menors que 'marró'
let lessThanBrown = colors.filter(color => color < 'marró');
document.write("<p>Colors que són menors que 'marró': " + lessThanBrown + "</p>");

// Retornem els darrers 2 colors
let lastTwoColors = colors.slice(-2);
document.write("<p>Darrers dos colors: " + lastTwoColors + "</p>");

// Afegim el color 'turquesa'
colors.push('turquesa');
document.write("<p>Array després d'afegir 'turquesa': " + colors + "</p>");

// Eliminem el color 'verd'
let index = colors.indexOf('verd');
if (index !== -1) {
  colors.splice(index, 1);
}
document.write("<p>Array després d'eliminar 'verd': " + colors + "</p>");
