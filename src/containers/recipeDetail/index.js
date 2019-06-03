import React from 'react';
import { connect } from 'react-redux';
import {getRecipeID} from '../../redux/actions';
import ReactMarkdown from 'react-markdown';
import ChefPreview from '../../components/ChefPreview';

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
            <h1>
            {this.props.recipe.title}
            </h1>
            <img alt="" src={this.props.recipe.main_image.url}/>
            <div></div>
            <div><ReactMarkdown key={this.props.recipe._id} source={this.props.recipe.instructions} /></div>
            <div><ChefPreview key={this.props.recipe.chef._id} {...this.props.recipe.chef}/></div>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailRecipe);