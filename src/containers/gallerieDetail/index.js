import React from 'react';
import { connect } from 'react-redux';
import {getGalleriesID} from '../../redux/actions';
import './style.scss';

const mapStateToProps = (state) => ({
  loading: state.gallerieid.isGallerieIDLoanding === true,
  gallerie: state.gallerieid.gallerie
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
      <div className="gallerie_detail">
        {this.props.loading ? <p>CARGANDO....</p>:
          <div>
            <h1>
            {this.props.gallerie.title}
            </h1>
            {this.props.gallerie.photos.map((photo,index) => {
            return <img alt="" src={photo.url} className="gallerie_foto"/>
            })}
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, null) (DetailGallerie);