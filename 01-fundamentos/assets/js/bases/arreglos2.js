let juegos = ["Zelda", "Mario", "luigi", "manti"];
console.log("Largo:", juegos.length);

juegos.push("F4-Zero");

juegos.unshift("Dota");

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let juegoBorrado = juegos.pop();

console.log("--->", juegoBorrado, juegos);

let pos = 1;
console.log(juegos);

let borrados = juegos.splice(pos, 2);
console.log("borrados:", borrados);

let mantiIndex = juegos.indexOf("manti");
console.log("mantiIndex", mantiIndex);
