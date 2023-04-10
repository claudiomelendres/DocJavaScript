import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users?.length === 0) return;

  state.currentPage += 1;
  state.users = users;

  //
};

const loadPreviousPage = async () => {
  if (state.currentPage === 1) return;
  const users = await loadUsersByPage(state.currentPage - 1);

  state.users = users;
  state.currentPage -= 1;
};

const onUserCange = () => {
  throw new Error("No Implemented");
};

const reloadPage = () => {
  throw new Error("No Implemented");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserCange,
  reloadPage,

  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
