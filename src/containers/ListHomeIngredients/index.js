import React from 'react';
import { connect } from 'react-redux';
import { getIngredients } from '../../redux/actions';
import IngredientPreview from '../../components/IngredientPreview';
//import './style.scss';

const mapStateToProps = (state) => ({
    loading: state.ingredients.isIngredientsLoading === true,
    ingredients: state.ingredients.ingredients
});

class Ingredients extends React.Component {
    componentWillMount(){
      this.props.dispatch(getIngredients());
    }
  
    render() {
        console.log(this.props);
       return (
           <React.Fragment>
              {this.props.loading ? <p>CARGANDO....</p>:
                  <div>
                      <h1>Tenemos {this.props.ingredients.length} ingredientes</h1>
                      <div className="container">
                      {this.props.ingredients.map((ingredient,index) => {
                          return <IngredientPreview key={ingredient.id} {...ingredient} />
                      })}
                      </div>
                  </div>
              }
           </React.Fragment>
       )
    }
  }
  
  export default connect(mapStateToProps, null)(Ingredients);