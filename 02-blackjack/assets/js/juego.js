/**
 * C - Trebol
 * D - Diamantes
 * H - Corazon
 * S - Espàdas
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
  puntosComputadora = 0;

// Referencias de HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");

const puntosHtml = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

// crea una baraja deck
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
};

crearDeck();
console.log(deck);

// // pedir carta
// const pedirCarta = () => {
//   const indice = Math.floor(Math.random() * deck.length - 1);
//   const carta = deck[indice];

//   deck = deck.filter((c) => c != carta);

//   //   console.log(carta);
//   console.log(deck);
//   return carta;
// };

const pedirCarta = () => {
  if (deck.length == 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHtml[1].innerText = puntosComputadora;
    //   console.log(carta);

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");

    divCartasComputadora.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos < 21);
};

// console.log(valorCarta(pedirCarta()));

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHtml[0].innerText = puntosJugador;
  //   console.log(carta);

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");

  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn("Los siento mucho, Perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn("21, Genial");
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);
});
