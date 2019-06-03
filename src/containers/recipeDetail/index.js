import React from 'react';
import { connect } from 'react-redux';
import {getRecipeID} from '../../redux/actions';
import ReactMarkdown from 'react-markdown';
import ChefPreview from '../../components/ChefPreview';
import './style.scss';

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
          <div className="recipe_detail">
            <h1>
            {this.props.recipe.title}
            </h1>
            <img alt="" src={this.props.recipe.main_image.url} className="recipe_image"/>
            <div><ReactMarkdown key={this.props.recipe._id} source={this.props.recipe.instructions} /></div>
            <h2>Chef:</h2>
            <div><ChefPreview key={this.props.recipe.chef._id} {...this.props.recipe.chef}/></div>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailRecipe);