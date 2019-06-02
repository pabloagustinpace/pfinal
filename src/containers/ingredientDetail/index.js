import React from 'react';
import { connect } from 'react-redux';
import {getIngredientsByID} from '../../redux/actions';

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
    console.log(this.props)  
    return(
      <div>
        {this.props.loading ? <p>CARGANDO....</p>:
          <div>
            {this.props.ingredient.name}
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailIngredient);