let tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ["mark 1", "mark 4", "nanoTech"],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
