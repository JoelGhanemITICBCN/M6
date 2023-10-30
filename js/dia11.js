function fecha() {

const fechaActual = new Date();

// 1)
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; 
const año = fechaActual.getFullYear();

// 2) 
const numeroSemana = Math.ceil((dia + (mes-1) * 30.44) / 7);

// 3) 
const diasPasados = (fechaActual - new Date(año, 0, 1)) / (1000 * 60 * 60 * 24);
const porcentajeDiasPasados = (diasPasados / 365) * 100;

// 4) 
const diasRestantes = 365 - diasPasados;
const porcentajeDiasRestantes = (diasRestantes / 365) * 100;

// 5) 
const horas = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

// 6) 
const segundosHoy = (horas * 60 * 60 + minutos * 60 + segundos);
const porcentajeDiaPasado = (segundosHoy / (24 * 60 * 60)) * 100;

// 7) 
const porcentajeDiaRestante = 100 - porcentajeDiaPasado;


console.log(`1) Hoy es el día ${dia} del mes ${mes} del año ${año}`);
console.log(`2) El nombre de la semana actual del año es ${numeroSemana}`);
console.log(`3) % de días pasados este año: ${porcentajeDiasPasados.toFixed(2)}%`);
console.log(`4) % de días que quedan en el año: ${porcentajeDiasRestantes.toFixed(2)}%`);
console.log(`5) Ahora son las ${horas}:${minutos}:${segundos}`);
console.log(`6) % de día que ha pasado: ${porcentajeDiaPasado.toFixed(2)}%`);
console.log(`7) % del día que queda: ${porcentajeDiaRestante.toFixed(2)}%`);

}

function codiBarres() {
    
      const codigoBarrasDado = prompt("codi");
      const codigoBarras = codigoBarrasDado.slice(0,-1);
      const comprob = codigoBarrasDado.slice(-2,-1);
        const digitos = codigoBarras.split('').map(Number);
        digitos.reverse();
        let suma = 0;
        for (let i = 0; i < digitos.length; i++) {
          let digito = digitos[i];
      
          if (i % 2 === 1) {
            digito *= 3;
          }
      
          suma += digito;
        digitoVerificacion
        const digitoVerificacion = (10 - (suma % 10)) % 10;
        if(comprob === digitoVerificacion) 
      console.log(`El dígito de verificación es: ${digitoVerificacion}`);
      }
      