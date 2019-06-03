import React from 'react';
import { connect } from 'react-redux';
import {getChefID} from '../../redux/actions';
import RecipePreview from '../../components/RecipePreview';
import './style.scss';

const mapStateToProps = (state) => ({
  loading: state.chefid.isChefIDLoanding === true,
  chef: state.chefid.chef
});
class DetailChef extends React.Component{

  async componentWillMount(){
    const { match } = this.props; 
    const { params } = match;
    const { idChef } = params;
    this.props.dispatch(getChefID(idChef));
  }

  render(){
    console.log(this.props.chef.recipes)
    return(
      <React.Fragment>
        {this.props.loading ? <p>CARGANDO....</p>:
          <div className="chef_detail">
            <h1>
              {this.props.chef.full_name}
            </h1>
            <img alt="" src={this.props.chef.image.url}/>
            <p>
              {this.props.chef.bio}
            </p>
            <div className="container_recipe">
              {this.props.chef.recipes.map((recipe,index) => {
              return <RecipePreview key={recipe.id} {...recipe} />
              })}
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, null) (DetailChef);