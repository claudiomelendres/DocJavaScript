const hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

let semana = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

console.log(semana[2] || "Dia no definido");
