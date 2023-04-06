import { heroes } from "./data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  // console.log("callbacksComponent");
  const id1 = "5d86371f1efebc31def272e2";
  const id2 = "5d86371f2343e37870b91ef1";

  findHero(id1, (err, hero) => {
    if (err) {
      element.innerHTML = err;
      return;
    }

    element.innerHTML = hero.name;
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String|null, heroe:Object)=>void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with id ${id} not found `);
    return;
  }

  callback(null, hero);
};
