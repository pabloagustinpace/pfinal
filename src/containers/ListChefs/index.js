import React from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../redux/actions';
import ChefPreview from '../../components/ChefPreview';
import './style.scss';

const mapStateToProps = (state) => ({
    loading: state.chefs.isChefsLoading === true,
    chefs: state.chefs.chefs
});

class Chefs extends React.Component {
    componentWillMount(){
      this.props.dispatch(getChefs());
    }
  
    render() {
       return (
           <React.Fragment>
              {this.props.loading ? <p>CARGANDO....</p>:
                  <div>
                      <h1>Tenemos {this.props.chefs.length} chefs</h1>
                      <div className="container_chefs">
                      {this.props.chefs.map((chef,index) => {
                          return <ChefPreview key={chef._id} {...chef} />
                      })}
                      </div>
                  </div>
              }
           </React.Fragment>
       )
    }
  }
  
  export default connect(mapStateToProps, null)(Chefs);