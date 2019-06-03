import React from 'react';
import { connect } from 'react-redux';
import {getIngredientsByID} from '../../redux/actions';
import RecipePreview from '../../components/RecipePreview';
import nullimage from '../../images/nullimage.png';
import './style.scss';

const mapStateToProps = (state) => ({
  loading: state.ingredientsid.isIngredientsidLoading === true,
  ingredient: state.ingredientsid.ingredient
});
class DetailIngredient extends React.Component{

  async componentWillMount(){
    const { match } = this.props; 
    const { params } = match;
    const { idIngredients } = params;
    this.props.dispatch(getIngredientsByID(idIngredients));
  }

  render(){
    console.log(this.props.ingredient.recipes)  
    return(
      <React.Fragment>
        {this.props.loading ? <p>CARGANDO....</p>:
          <div className="ingredient_detail">
            <h1>
            {this.props.ingredient.name}
            </h1>
            <img alt="" className="ingredient_photo" src={this.props.ingredient.image ? this.props.ingredient.image.url : nullimage}/>
            <h2>Calorias:</h2>
            <p>{this.props.ingredient.calories}</p>
            <h2>Informacion nutricional:</h2>
            <p>{this.props.ingredient.nutritional_value}</p>
            <h2>Recetas con {this.props.ingredient.name}:</h2>
            <div className="container_recipe">
            {this.props.ingredient.recipes.map((recipe,index) => {
              return <RecipePreview key={recipe.id} {...recipe} />
              })}
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, null) (DetailIngredient);