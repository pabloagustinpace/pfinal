import React from 'react';
import ListHomeRecipes from '../../containers/ListHomeReceipes';
import ListHomeIngredients from '../../containers/ListHomeIngredients';

const Home = () => {
    return(
        <div class="main-container">
            <div class="container" >
                <ListHomeRecipes />
            </div>
            <div class = "container">
                <ListHomeIngredients />
            </div>
        </div>
    )
}

export default Home;