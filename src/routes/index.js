import React from "react";
import { Switch, Route } from "react-router";

import Login from "../components/pagina_login/tela_login";
import Perfil from "../components/perfil/perfil";
import Seguidores from "../components/seguidores/seguidores"
import Seguindo from "../components/seguindo/seguindo"
import Repositorios from "../components/repositorios/repositorios"

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/perfil' component={Perfil} />
            <Route exact path='/seguidores' component={Seguidores} />
            <Route exact path='/seguindo' component={Seguindo} />
            <Route exact path='/repositorios' component={Repositorios} />
        </Switch>
    )
}