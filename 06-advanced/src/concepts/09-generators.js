/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorsComponent = (element) => {
  console.log("generatorsComponent");
  const genId = idGenerator();

  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);
};

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}
