export const init = () => {
  //<- Funcion que nos sirve para iniciar el state del reducer
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
