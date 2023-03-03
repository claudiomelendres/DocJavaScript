const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa False");
  return false;
};

console.warn("Not a la Negacion");

console.log(!regresaFalse());

console.log("=================");
console.log(regresaFalse() && regresaTrue());

console.warn("OR");
console.log(regresaFalse() || regresaTrue());

console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && "Hola Mundo" && 150; // 150
const a2 = "Hola" && "Mundo"; // Mundo
const a3 = soyFalse || "Ya no soy false"; // Ya no soy false

console.log({ a1, a2, a3 });
