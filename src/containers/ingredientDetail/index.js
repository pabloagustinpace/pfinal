import React from 'react';
import { connect } from 'react-redux';
import {getIngredientsByID} from '../../redux/actions';
import RecipePreview from '../../containers/ListHomeReceipes';
import nullimage from '../../images/nullimage.png';

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
      <div>
        {this.props.loading ? <p>CARGANDO....</p>:
          <div>
            <h1>
            {this.props.ingredient.name}
            </h1>
            <img alt="" src={this.props.ingredient.image ? this.props.ingredient.image.url : nullimage}/>
            <h2>Calorias:</h2>
            <p>{this.props.ingredient.calories}</p>
            <h2>Informacion nutricional:</h2>
            <p>{this.props.ingredient.nutritional_value}</p>
            {this.props.ingredient.recipes.map((recipe,index) => {
              return <RecipePreview key={recipe.id} {...recipe} />
              })}
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailIngredient);