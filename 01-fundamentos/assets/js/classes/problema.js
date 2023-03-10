console.log('claudio');


function Persona(nombre, edad) {
    console.log('Persona');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = () => {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const maria = new Persona('Maria', 18);
console.log(maria);
maria.imprimir();