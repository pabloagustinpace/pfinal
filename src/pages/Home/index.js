import React from 'react';
import Nav from '../../components/Nav';
import ListHomeRecipes from '../../containers/ListHomeReceipes';
import ListHomeIngredients from '../../containers/ListHomeIngredients';

const Home = () => {
    return(
        <div class="homepage">
            <Nav />
            <div class="container" >
                <ListHomeRecipes />
            </div>
            <div class = "container">
                <ListHomeIngredients />
            </div>
        </div>
    );
}

export default Home;