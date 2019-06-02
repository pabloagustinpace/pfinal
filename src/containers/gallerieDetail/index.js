import React from 'react';
import { connect } from 'react-redux';
import {getGalleriesID} from '../../redux/actions';

const mapStateToProps = (state) => ({
  loading: state.gallerieid.isGallerieIDLoanding === true,
  chef: state.gallerieid.gallerie
});
class DetailGallerie extends React.Component{

  async componentWillMount(){
    const { match } = this.props; 
    const { params } = match;
    const { idGallerie } = params;
    this.props.dispatch(getGalleriesID(idGallerie));
  }

  render(){
    console.log(this.props)
    return(
      <div>
        {this.props.loading ? <p>CARGANDO....</p>:
          <div>
            holi
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailGallerie);