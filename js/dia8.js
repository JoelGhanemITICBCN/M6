function rombo() {
  let columnes = prompt("Numero de columnes");
  let files = (columnes/2)+1;
  let t = document.createElement("table");

  for (let i = 1; i < files; i++){
    let tr = document.createElement("tr");

    for(let j = columnes/2; j >= 0; j--){
      let td = document.createElement("td");

      if( j <= i) {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="red";
        tr.appendChild(td);
      } else {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="white";
        tr.appendChild(td);
      }
    }
    //SEGUNDA MITAD, IMPRIMO DE LA PUNTA PARA LA DERECHA
    for(let j = 0; j < (columnes/2)-1; j++){
      let td = document.createElement("td");

      if( j+1 >= i) {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="white";
        tr.appendChild(td);
      } else {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="red";
        tr.appendChild(td);
      }
      t.appendChild(tr);
    }
    document.body.appendChild(t);
  }
  for (let i = 1; i < files-1; i++){
    let tr = document.createElement("tr");

    for(let j = columnes/2; j >= 0; j--){
      let td = document.createElement("td");

      if( j <= i) {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="red";
        tr.appendChild(td);
      } else {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="white";
        tr.appendChild(td);
      }
    }
    //SEGUNDA MITAD, IMPRIMO DE LA PUNTA PARA LA DERECHA
    for(let j = 0; j < (columnes/2)-1; j++){
      let td = document.createElement("td");

      if( j+1 >= i) {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="white";
        tr.appendChild(td);
      } else {
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor="red";
        tr.appendChild(td);
      }
      t.appendChild(tr);
    }
    document.body.appendChild(t);
  }
  //columnas
}
