const carros = ["ford", "mazda", "honda", "toyota"];

let i = 0;
while (i < carros.length) {
  console.log(carros[i]);
  i++;
}

i = 0;
while (carros[i]) {
  console.log(carros[i]);
  i++;
}

console.warn("Do While");

let j = 10;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
