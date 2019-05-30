import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/recipes" component={AllRecipes} />
    <Route exact path="/recipes/:idRecipe" component={DetailRecipe} />
    <Route exact path="/chefs" component={AllChefs} />
    <Route exact path="/chefs/:idChef" component={DetailChef} />
    <Route exact path="/galleries" component={AllGalleries} />
    <Route exact path="/galleries/:idGallerie" component={DetailGallerie} />
    <Route exact path="/ingredients" component={AllIngredients} />
    <Route exact path="/ingredients/:idIngredients" component={DetailIngredient} />
    <Route path='*' component={ () => <h1> Pagina de error. 404 Not found</h1>} /> {}
  </Switch>
)

export default Routes;