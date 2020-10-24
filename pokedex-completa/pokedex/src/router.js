import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon/pokemonCard";
import Pokeinfos from "./components/pokeinfos/pokeinfos";
import Gen1 from "./components/gen1/gen1";
import Gen2 from "./components/gen2/gen2";
import Gen3 from "./components/gen3/gen3";
import Gen4 from "./components/gen4/gen4";
import Gen5 from "./components/gen5/gen5";
import Gen6 from "./components/gen6/gen6";
import Sobre from "./components/sobre/sobre";
import Luiz from "./components/cv/luiz/luiz";
import Danilo from "./components/cv/danilo/danilo";
import Hylkson from "./components/cv/hylkson/hylkson";
import Lucas from "./components/cv/lucas/lucas";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Pokemon} />
      <Route path="/pokeinfos" component={Pokeinfos} />
      <Route path="/gen1" component={Gen1} />
      <Route path="/gen2" component={Gen2} />
      <Route path="/gen3" component={Gen3} />
      <Route path="/gen4" component={Gen4} />
      <Route path="/gen5" component={Gen5} />
      <Route path="/gen6" component={Gen6} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/luiz" component={Luiz} />
      <Route path="/danilo" component={Danilo} />
      <Route path="/hylkson" component={Hylkson} />
      <Route path="/lucas" component={Lucas} />
      
    </Switch>
  </BrowserRouter>
);

export default Router;
