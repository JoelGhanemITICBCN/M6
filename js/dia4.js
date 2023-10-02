function Aprop() {
  let a = parseInt(prompt('Primer numero')); 
  let b = parseInt(prompt('Segon numero'));
  let resultatA = Math.abs(a-100);
  let resultatB = Math.abs(b-100);
  if(a === b) {
    console.log(`Els dos números són iguals`);
  } else if(a <= b) {
    console.log(`El numero més proper a 100 és ${b}`);
  } else {
    console.log(`El numero més proper a 100 és ${a}`);
  }
}

function Data() {
  let hora = parseInt(prompt('Hora'));
  let minuts = parseInt(prompt('Minuts'));
  let segons = parseInt(prompt('Segons'));
  let d = new Date();
  d.setHours(hora);
  d.setMinutes(minuts);
  d.setSeconds(segons+1);
  console.log(`Hora:  ${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`)
}

function DataValida() {
  let any = parseInt(prompt('Any'));
  let mes = parseInt(prompt('Mes'))-1;
  let dia = parseInt(prompt('Dia'));
  let valida = true;
  if(mes < 0 || mes >= 12) {
    valida = false;
  } else if(dia > 31) {
    valida = false;
  } else if(mes === 1 && dia >29) {
    valida = false;
  } else if((any % 4 === 0 && any % 100 !== 0) || any % 400 ===0){
    valida = false;
  }
  if (valida) {
    console.log(`Es valida`);
  } else {
    console.log(`No es valida`);
  }
}


function convertir() {
  let dies = prompt('dies');
  let any = 0;
  let mes = 0;
  mes = Math.floor(dies/30);
  any = Math.floor(mes/12);
  dies = Math.floor(dies-(30*mes));
  mes = Math.floor(mes-(12*any));
  console.log(`Anys:${any} Mesos:${mes} Dies:${dies}`);
}
