import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { init } from "./helpers/functionsHelpers";
import { AppRouter } from "./routers/AppRoute";



export const HeroApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => { //<- disparamos el efecto cada que se actualize el usuario.
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    /* <- Declaranos noestro contexto y nuestro proovedor de contexto asignando globalmente user y el dispatch.*/
    <AuthContext.Provider value={{ user, dispatch }}> 
      <AppRouter />;
    </AuthContext.Provider>
  );
};
