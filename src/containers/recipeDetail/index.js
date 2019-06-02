import React from 'react';
import { connect } from 'react-redux';
import {getRecipeID} from '../../redux/actions';

const mapStateToProps = (state) => ({
  loading: state.recipeid.isRecipeIDLoanding === true,
  recipe: state.recipeid.recipe
});
class DetailRecipe extends React.Component{

  async componentWillMount(){
    const { match } = this.props; 
    const { params } = match;
    const { idRecipe } = params;
    this.props.dispatch(getRecipeID(idRecipe));
  }

  render(){
    return(
      <div>
        {this.props.loading ? <p>CARGANDO....</p>:
          <div>
            {this.props.recipe.title}
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailRecipe);