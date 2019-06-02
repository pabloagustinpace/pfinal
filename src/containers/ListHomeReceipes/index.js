import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions';
import RecipePreview from '../../components/RecipePreview'

const mapStateToProps = (state) => ({
    loading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes
});

class Recipes extends React.Component {
    componentWillMount(){
      this.props.dispatch(getRecipes());
    }
  
    render() {
        console.log(this.props)
       return (
           <React.Fragment>
              {this.props.loading ? <p>CARGANDO....</p>:
                  <div>
                      <h1>Tenemos {this.props.recipes.length} recetas</h1>
                      {this.props.recipes.map((recipe,index) => {
                          return <RecipePreview key={recipe.id} {...recipe} />
                      })}
                  </div>
              }
           </React.Fragment>
       )
    }
  }
  
  export default connect(mapStateToProps, null)(Recipes);