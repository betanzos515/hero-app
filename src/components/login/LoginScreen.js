import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const handleClick = () => {
    // history.push('/'); //push guarda un historial de las rutas
    // history.replace('/'); //replace remplaza la ruta actual por lo tanto no se guarda un historial de las rutas visitadas.
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    history.replace(lastPath); /* Remplaza la ruta actual por la que se le pase como parametro evitando que esta se guarde en el historial, la pagina principal en este caso la pagina principal es la de marven */

    const action = {
      /* Aqui simulamos una autenticación */
      type: types.login,
      payload: {
        name: "David",
      },
    };

    //enviamos esa accion al dispatch
    dispatch(action);

  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>

      <hr />

      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};
