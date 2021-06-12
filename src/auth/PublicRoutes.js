import React from "react";
import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router-dom";

//el componente recibe una serie de parametros para su correcto funcionamiento. en este componente hacemos uso de la renderización condicional en caso de que el usuario este logeado o no.
export const PublicRoutes = ({
  isAutenticated,
  component: Component,
  ...rest //rest es el resto de los parametros que se nos envien a travez de las props
}) => {
  return (
    <Route /* declaramos una ruta la cual recibe el resto de parametros y el componente a renderizar es evaludao si el usuario está autenticado o no */
      {...rest}
      component={(props) =>
        (!isAutenticated) ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
};

PublicRoutes.propsTypes = {
    isAutenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired    
}
