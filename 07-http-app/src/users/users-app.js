import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table";
import { renderButtons } from "./presentation/reder-buttons/render-buttons";
import { renderAddButton } from "./presentation/renderAddButton/render-add-button";
import { renderModal } from "./presentation/render-modal/render-modal";

export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();
  element.innerHTML = "";

  // console.log(usersStore.getUsers());

  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element, async (userLike) => {
    // const user = await saveUser(userLike);
    // usersStore.onUserChanged(user);
    // renderTable();
  });
};
