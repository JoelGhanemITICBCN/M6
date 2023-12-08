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

// at()
let indexN = 2;
document.write(`at(${index}) -> ${colors.at(index)}<br>`);

// concat()
let otroArray = ['rosa', 'morado'];
document.write(`concat(['rosa', 'morado']) -> ${colors.concat(otroArray)}<br>`);

// copyWithin()
document.write(`copyWithin(0, 3, 4) -> ${colors.copyWithin(0, 3, 4)}<br>`);

// entries()
let iterator = colors.entries();
for (let entry of iterator) {
  document.write(`entries() -> ${entry}<br>`);
}

// every()
let testFunc = (color) => color.length > 3;
document.write(`every(color => color.length > 3) -> ${colors.every(testFunc)}<br>`);

// fill()
document.write(`fill('rojo') -> ${colors.fill('rojo')}<br>`);

// filter()
let filterFunc = (color) => color.length > 4;
document.write(`filter(color => color.length > 4) -> ${colors.filter(filterFunc)}<br>`);

// find()
let findFunc = (color) => color === 'blau';
document.write(`find(color => color === 'blau') -> ${colors.find(findFunc)}<br>`);

// findIndex()
let findIndexFunc = (color) => color === 'blau';
document.write(`findIndex(color => color === 'blau') -> ${colors.findIndex(findIndexFunc)}<br>`);

// flat()
let nestedArray = ['verd', ['vermell', 'groc'], 'blau'];
document.write(`flat() -> ${nestedArray.flat()}<br>`);

// flatMap()
let mapperFunc = (color) => [color, 'gris'];
document.write(`flatMap(color => [color, 'gris']) -> ${colors.flatMap(mapperFunc)}<br>`);

// forEach()
colors.forEach((color) => document.write(`forEach() -> ${color}<br>`));

// from()
document.write(`from('hola') -> ${Array.from('hola')}<br>`);

// includes()
document.write(`includes('blau') -> ${colors.includes('blau')}<br>`);

// indexOf()
document.write(`indexOf('blau') -> ${colors.indexOf('blau')}<br>`);
