//spread operator , parametro rest

let a = 10;
let b = 20;

a = 30;

console.log({ a, b });

let juan = { nombre: "Juan" };
let ana = { ...juan };

ana.nombre = "Ana";

console.log(juan, ana);

const cambiarNombre = (persona) => {
  persona.nombre = "Nueva";
  return persona;
};

let peter = { nombre: "Peter" };
let nueva = cambiarNombre({ ...peter });

console.log(peter, nueva);

// arreglos

const frutas = ["Manzana", "Pera", "Piña"];

console.time("slice");
const otrasFrutas2 = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutas = [...frutas];
console.timeEnd("spread");

otrasFrutas.push("Mango");

console.table({ frutas, otrasFrutas });
