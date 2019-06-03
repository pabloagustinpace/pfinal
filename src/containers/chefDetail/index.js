import React from 'react';
import { connect } from 'react-redux';
import {getChefID} from '../../redux/actions';
import RecipePreview from '../../components/RecipePreview';

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
    console.log(this.props)
    return(
      <div>
        {this.props.loading ? <p>CARGANDO....</p>:
          <div>
            <h1>
              {this.props.chef.full_name}
            </h1>
            <p>
              {this.props.chef.bio}
            </p>
            <img alt="" src={this.props.chef.image.url}/>
            <div className="container">
              {this.props.chef.recipes.map((recipe,index) => {
              return <RecipePreview key={recipe.id} {...recipe} />
              })}
            </div>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailChef);