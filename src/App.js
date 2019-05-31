import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import  routes  from './routes';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import DetailRecipe from './pages/DetailRecipe';
import Chefs from './pages/Chefs';
import DetailChef from './pages/DetailChefs';
import Galleries from './pages/Galleries';
import DetailGalleries from './pages/DetailGalleries';
import Ingredients from './pages/Ingredients';
import DetailIngredients from './pages/DetailIngredinets';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="mainpage">
        <Nav />
        <div className="app-container__inner">
          <Switch>
            <Route exact path={`${routes.HOME}`} component={Home} />
            <Route exact path={`${routes.RECIPES}`} component={Recipes} />
            <Route exact path={`${routes.DETAILRECIPE}`} component={DetailRecipe} />
            <Route exact path={`${routes.INGREDIENTS}`} component={Ingredients} />
            <Route exact path={`${routes.DETAILINGREDIENTS}`} component={DetailIngredients} />
            <Route exact path={`${routes.GALLERIES}`} component={Galleries} />
            <Route exact path={`${routes.DETAILGALLERIES}`} component={DetailGalleries} />
            <Route exact path={`${routes.CHEFS}`} component={Chefs} />
            <Route exact path={`${routes.DETAILCHEF}`} component={DetailChef} />
            <Route render={() => <h1>404 - No se encontró</h1>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
