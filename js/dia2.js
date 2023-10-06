function fibonacci(){
  let iteracions = prompt('Quantes iteracions vols?');
  let a = 0;
  let b = 1;
  let c = 1;
  for (let i = 1; i <= iteracions; i++){
    console.log(`fibo[${i}] = ${b}`);
    c = a+b;
    a = b;
    b = c;
  }
}

function taulaMultiplicar() {
let taula = prompt('Quin numero vols multiplicar?');
  for (let i=0; i <=taula; i++){
    console.log(`${taula} x ${i} = ${taula*i}`);
  }
}
