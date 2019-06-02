import React from 'react';
import ListHomeRecipes from '../../containers/ListHomeReceipes';
import ListHomeIngredients from '../../containers/ListHomeIngredients';

const Home = () => {
    return(
        <div className="main-container">
            <div className="container" >
                <ListHomeRecipes />
            </div>
            <div className = "container">
                <ListHomeIngredients />
            </div>
        </div>
    )
}

export default Home;