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

const spiderman = new Persona("Peter parker", "spider", "Soy tu amigo");
const ironman = new Persona("Tony Start", "Ironman", "Yo soy Ironman");

spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = "Pie de ceresa de la tia may";

console.log(spiderman.getComidaFavorita);
console.log(spiderman);

// Persona._conteo = 2;
console.log("Conteo Statico...", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
