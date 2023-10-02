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
