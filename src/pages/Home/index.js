import React from 'react';
import ListHomeRecipes from '../../containers/ListHomeReceipes';
import ListHomeIngredients from '../../containers/ListHomeIngredients';


const Home = () => {
    return(
        <div>
            <div>
                <ListHomeRecipes />
            </div>
            <div>
                <ListHomeIngredients />
            </div>
        </div>
    )
}

export default Home;