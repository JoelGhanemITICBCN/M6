function conLoop() {
  let base = prompt('base');
  let potencia = prompt('potencia');
  let resultado = 1;
  let tmp = 0;
  console.time("for")
  for (let i = 1; i <= potencia; i++) {
    resultado *= base;
  }
  console.timeEnd("for");
  console.log(`La potencia és  ${resultado}`);
  let resultadoP = math.pow(base,potencia);
  console.log(`Usando el pow  ${resultado}`);
}

function Numeros() {
  let num1 = prompt ('num1');
  let num2 = prompt ('num2');
  let num3 = prompt ('num3');
  let sum = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
  let numeros = [num1,num2,num3];
  let avg = sum / numeros.length;
  console.log(`Els numeros en ordre són: ${numeros.sort()}`);
  console.log(`El numero mes gran es el: ${Math.max(num1,num2,num3)}`);
  console.log(`El numero mes petit es el: ${Math.min(num1,num2,num3)}`);
  console.log(`La mitjana es: ${avg}`);
  console.log(`La mediana es: ${numeros[1]}`);


}
