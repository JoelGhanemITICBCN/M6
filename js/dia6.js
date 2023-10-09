function calculaTrucada() {
  let hores = prompt('Quantes hores dura la trucada');
  let minuts = prompt('Quants minuts dura la trucada');
  let segons = prompt('Quants segons dura la trucada');
  let preuHores = hores * 3;
  let preuMinuts = minuts * 0.05;
  let preuSegons = segons * (0.05 / 60);
  let preuTemps = preuHores + preuSegons + preuMinuts;
  let preuServei = 0.10;
  let preuTotal = preuTemps + preuServei;
  let mostrarPreu = preuTotal.toFixed(2);
  console.log (`El cost total de la trucada és de ${mostrarPreu} euros`);

}

function transformaHexa(){
  let r = prompt('Numero de vermell');
  let g = prompt('Numero de verd');
  let b = prompt('Numero de blau');
  let red = converteix(parseInt(r));
  let green = converteix(parseInt(g));
  let blue = converteix(parseInt(b));
  console.log(`(${r},${g},${b}) #${red}${green}${blue}`);
}
function converteix(valor){
  if(valor < 256){
    return (valor.toString(16).padStart(2,'0').toUpperCase());
  }
  return 0;
}

function judio() {
  let preu = parseFloat(prompt('Quant ha costat'));
  let pagament = parseFloat(prompt('Quant has pagat'));
  let canviOriginal = pagament - preu;
  let canvi = canviOriginal;
  let contador = 0;
  let texto = '';
  let billetes=[500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.02,0.01];
  if(canviOriginal >=0) {
    console.log(`preu = ${preu}  calers = ${pagament}`);
    for (let i = 0; i < billetes.length; i++){
      while((canvi - billetes[i]) >= 0) {
        contador ++;
        canvi = canvi - billetes[i];
        texto = (`${contador} de ${billetes[i]}`);
      }
      contador = 0;
      //if(!texto === ""){
      console.log(`${texto}`);
      //}
    }
    console.log(`canvi = ${canviOriginal}`);
  } else {
  console.log(`A pagar ${canviOriginal*-1} euros crack`);
  }
}
