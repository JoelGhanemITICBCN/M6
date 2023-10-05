function toF() {
  let temperatura = prompt('Temperatura');
  let convertida = (9/5) * temperatura + 32;
  console.log(`Són ${convertida} graus Farenheit`);
}

function toC() {
  let temperatura = prompt('Temperatura');
  let convertida = (temperatura -32) /(9/5);
  console.log(`Són ${convertida} graus Centigrads`);
}

function quin(){
  let letra = prompt('Diguem a quin vols que converteixi');
  if(letra === "C") {
    toF();
  }else if (letra === "F"){
    toC();
  } else {
    alert('Introdueix una dada valida');
  }
}

function conversor() {
  let numero = prompt('Diguem un numero');
  aBi(numero);
  aOc(numero);
  aHd(numero);
}

function aBi(num) {
  let numPrincipi = num;
  let resultado = "";
  let resto;
  while(num > 0) {
    resto = Math.floor(num % 2);
    resultado = resto + resultado;
    num = Math.floor(num/2);
  }
  console.log(`El numero ${numPrincipi} en binari es ${resultado}`);
}

function aOc(num) {
  let numPrincipi = num;
  let resultado = "";
  let resto;
  while(num > 0) {
    resto = Math.floor(num % 8);
    resultado = resto + resultado;
    num = Math.floor(num/8);
  }
  console.log(`El numero ${numPrincipi} en octal es ${resultado}`);
}

function aHd(num){
  let numPrincipi = num;
  let resultado = "";
  let resto;
  let arreglo =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  while(num > 0) {
    resto = Math.floor(num % 16);
    resto = arreglo[resto];
    resultado = resto + resultado;
    num = Math.floor(num/16);
  }
  console.log(`El numero ${numPrincipi} en hexadecimal es ${resultado}`);
}


function conversorDefinitiu() {
  let numero = prompt('Diguem un numero');
  let bi = conversorUniversal(numero,2);
  let oc = conversorUniversal(numero,8);
  let hd = conversorUniversal(numero,16);
console.log(`El numero ${numero} en binari  es ${bi} en octal es ${oc} i en hexadecimal es ${hd}`) ;
}

 function conversorUniversal(num,base){
  let numPrincipi = num;
  let resultado = "";
  let resto;
  let arreglo =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  while(num > 0) {
    resto = Math.floor(num % base);
    resto = arreglo[resto];
    resultado = resto + resultado;
    num = Math.floor(num/base);
  }
  return resultado;

}
