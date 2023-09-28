function tabla(){
  let numerito = prompt('numero');

  console.log(`Taula del ${numerito}`);
  for (let i = 0; i<=numerito; i++){
    let resultado = numerito*i;
    console.log(`${numerito} x ${i} = ${resultado}`);
  }
}

function fibonacci(){
  let cuantos = prompt('cuantos');
  let a = 1;
  let b = 0;
  console.log('se viene fibonacci nenas');
  for(let i = 1; i <=cuantos; i++) {
    let suma = a+b;
    a = b;
    b = suma;
    console.log(`fibo[${i}] = ${suma}`);
  }

}
