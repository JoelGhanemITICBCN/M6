function compta() {
  let a = prompt ("Frase 1");
  let b = prompt ("Frase 2");
  if (a.length > b.length){
    console.log("La primera frase es mes llarga");
  }
  if (a.length < b.length){
    console.log("La segona frase es mes llarga");
  }
  if (a.length == b.length){
    console.log("Les frases son igual de llargues");
  }
}

function repite() {
  let text = prompt ("Dame un texto");
  let lletra = prompt ("Dame una letra");
  let contador = 0;
  for (let i = 0; i < text.length; i++) {
    if(text.charAt(i) == lletra) {
      contador++;
    }
  }
  if(contador >= 2 && contador <= 4){
    console.log(`La lletra '${lletra}' esta entre 2 i 4 vegades al text`);
  }
}

function quita() {
  let text = prompt ("Dame un texto");
  let posicion = prompt ("Dame una posicion");
  let text2 ="";
  for (let i = 0; i < text.length; i++) {
    if(i != posicion-1) {
      text2 +=text.charAt(i);
    }
  }
  document.write(text2);
}

function todo() {
  let text = prompt("Diguem un text");
  let largo = text.length;
  let contadorPalabras = 1;
  let contadorVocales = 0;
  let vocals = "aàáeéèoóòuùúiìí";
  let vocalsEnText = "";
  document.write("text en majuscules " + text.toUpperCase());
  document.write("<br>");
  document.write("text en minuscules " + text.toLowerCase());
  document.write("<br>");
  document.write("Lonigtud del text: " + largo);
  document.write("<br>");
  for(let i = 0; i < text.length; i++){
    if(text.charAt(i) == " ") {
      contadorPalabras++;
    }
    for(let j = 0; j < vocals.length; j++) {
      if(text.charAt(i) == vocals.charAt(j)) {
        vocalsEnText += text.charAt(i);
        contadorVocales++;
      }
    }
  }
  document.write("Numero de paraules: " + contadorPalabras);
  document.write("<br>");
  document.write("Les vocals que surten al text " + vocalsEnText);
  document.write("<br>");
  document.write("Numero de vocals: " + contadorVocales);
  document.write("<br>");
  let textFor = "";
  document.write("El text reduint ");
  document.write("<br>");
  while(text.length > 0) {
    document.write(text);
    document.write("<br>");
    text = text.substring(1);
  }
}
