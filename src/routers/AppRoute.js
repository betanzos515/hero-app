import { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { PrivateRoutes } from "../auth/PrivateRoutes";
import { PublicRoutes } from "../auth/PublicRoutes";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  const {user} = useContext(AuthContext); //<- extraemos el usuario de nuestro contexto.
  return (
    <Router>
      <div>
        <Switch> {/* Selecciona las rutas en las que se puede navegar */}
            {/* El componente route se encarga de renderizar el componente especificado en la ruta */}
            <PublicRoutes exact path='/login' component={LoginScreen} isAutenticated={user.logged}/> 
            <PrivateRoutes path='/' component={DashboardRoutes} isAutenticated={user.logged}/>
        </Switch>
      </div>
    </Router>
  );
};