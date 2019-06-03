import React from 'react';
import ListHomeRecipes from '../../containers/ListHomeReceipes';
import ListHomeIngredients from '../../containers/ListHomeIngredients';


const Home = () => {
    return(
        <React.Fragment>
                <ListHomeRecipes />
                <ListHomeIngredients />
        </React.Fragment>
    )
}

export default Home;