function crearTaula(){
  let files = prompt("Numero de files");
  let columnes = prompt("Numero de columnes");
  let t = document.createElement("table");

  //columnas
  for (let i =0; i <= files; i++){
    let tr = document.createElement("tr");

    //filas
    for(let j =0; j<=columnes; j++){
      let td = document.createElement("td");
      let texto = document.createTextNode("|" + i + "." + j + "|");
      td.appendChild(texto);
      tr.appendChild(td);
    }
    t.appendChild(tr);
  }
  document.body.appendChild(t);
}

function taulaMultiplicadora(){
  let files = prompt("Numero de files");
  let columnes = prompt("Numero de columnes");
  let t = document.createElement("table");

  //columnas
  for (let i =1; i <= files; i++){
    let tr = document.createElement("tr");

    //filas
    for(let j =1; j<=columnes; j++){
      let td = document.createElement("td");
      let texto = document.createTextNode("|" + i*j + "|");
      td.appendChild(texto);
      tr.appendChild(td);
    }
    t.appendChild(tr);
  }
  document.body.appendChild(t);

}

function piramide() {
  let columnes = prompt("Numero de columnes");
  let files = (columnes/2)+1;
  let t = document.createElement("table");

  for (let i =0; i < files-1; i++){
    let tr = document.createElement("tr");

    for(let j =columnes; j >= 0; j--){
      let td = document.createElement("td");

      if( j <= i) {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="green";
        tr.appendChild(td);
      } else {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="red";
        tr.appendChild(td);
      }
    }

    for(let j = 0; j <= columnes/2; j++){
      let td = document.createElement("td");

      if( j >= i) {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="red";
        tr.appendChild(td);
      } else {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="green";
        tr.appendChild(td);
      }
      t.appendChild(tr);
    }
        document.body.appendChild(t);
  }
  //columnas
}
