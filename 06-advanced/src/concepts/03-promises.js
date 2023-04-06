import { heroes } from "./data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  console.log("promiseComponent");

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `${hero1.name},${hero2.name}`;
  };

  const renderError = (err) => {
    element.innerHTML = `
    <h1>Error</>
    <h3>${err}</h3>
    `;
  };

  const id1 = "5d86371f25a058e5b1c8a65e";
  const id2 = "5d86371f1efebc31def272e2";

  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);

  //findHero(id1).then(renderHero).catch(renderError);
};

/**
 *
 * @param {String} id
 * @return {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`);
  });
};
