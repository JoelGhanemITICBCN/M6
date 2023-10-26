function adivina() {
  const num = Math.floor(Math.random() * 100 + 1);
  let numeroPibe = prompt("Digues un numero entre el 1 i el 100");
  let contador = 1;
  while(numeroPibe != num && numeroPibe != 0) {
    if(numeroPibe < 0 || numeroPibe > 100) {
      console.log("Numero invalid");
      contador ++;
    } else {
      if(numeroPibe > num) {
        console.log("menor");
      } else if (numeroPibe < num) {
        console.log("major");
      }
      contador ++;
    }
    numeroPibe = prompt("Digues un numero entre el 1 i el 100");
  }
  if(numeroPibe == 0){
    console.log("Game over");
  }
  if(numeroPibe == num) {
    console.log(`L'has endivinat en ${contador} intents`);
  }
}

function dimecres() {
  let any1 = prompt("Digues 1 any entre el 2000 i el 2050");
  let any2 = prompt("Digues un altre any entre el 2000 i el 2050");
  if(any1 < 2000 || any2 > 2050) {
    console.log("Any incorrecte")
  } else {
    for(let i = any1; i <= any2; i++){
      let fecha = new Date(i,0,1);
      if(fecha.getDay() === 3){
        console.log(`El primer any que comença en dimecres és ${i}`);
        break;
      }
    }
  }
}

function vocaliza() {
  let palabra = prompt("Escriu una paraula");
  let vocals = "aàáeéèoóòuùúiìí";
  let vocalsDites =""
  let contador = 0;
  for(let i = 0; i < palabra.length; i++){
    for(let j = 0; j < vocals.length; j++) {
      if(palabra.charAt(i) == vocals.charAt(j)){
        //If par aver si es vocal
        if(vocalsDites.length == 0) {
          vocalsDites += vocals.charAt(j);
        }
        for (let k = 0; k < vocalsDites.length; k++) {
          if(vocals.charAt(j) != vocalsDites.charAt(k)) {
            vocalsDites += vocals.charAt(j);
            contador ++;
          }
        }
      }
    }
  }
  if(contador >= 5) {
    console.log("Es pentavocalica");
  } else {
    console.log("No es pentavocalica");
  }
}
