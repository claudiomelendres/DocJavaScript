// sabados y domingos se abre a las 9
// lunes a viernes se abre a las 11
// domingo es 0 y sabado es 6

const dia = 1;

const horaActual = 10;

let horaApertura;
let mensaje;

horaApertura = [0, 6].includes(dia) ? 9 : 11;
mensaje =
  horaActual >= horaApertura
    ? "Esta Abierto"
    : `Esta Cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
