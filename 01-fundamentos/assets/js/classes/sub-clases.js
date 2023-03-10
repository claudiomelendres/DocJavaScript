class Persona {
  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre);
    console.log("soy methodo statico");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";
  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice ${this.frase}`);
  }
}

class Heroe extends Persona {
  clan = "Sin clan";
  constructor(nombre, codigo, frase, clan) {
    super(nombre, codigo, frase);
    this.clan = clan;
  }

  quienSoy() {
    super.quienSoy();
    console.log(`soy Heroe`);
  }
}

const spiderman = new Heroe(
  "Peter parker",
  "spider",
  "Soy tu amigo",
  "avengers"
);

console.log(spiderman);
spiderman.quienSoy();
