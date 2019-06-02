import React from 'react';
import { connect } from 'react-redux';
import {getChefID} from '../../redux/actions';

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
            {this.props.chef.full_name}
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailChef);