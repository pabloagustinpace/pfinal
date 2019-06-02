import React from 'react';
import { connect } from 'react-redux';
import { getGalleries } from '../../redux/actions';
import GalleriePreview from '../../components/GalleriePreview';

const mapStateToProps = (state) => ({
    loading: state.galleries.isGalleriesLoading === true,
    galleries: state.galleries.galleries
});

class Galleries extends React.Component {
    componentWillMount(){
      this.props.dispatch(getGalleries());
    }
  
    render() {
        console.log(this.props)
       return (
           <React.Fragment>
              {this.props.loading ? <p>CARGANDO....</p>:
                  <div>
                      <h1>Tenemos {this.props.galleries.length} galerias</h1>
                      {this.props.galleries.map((gallerie,index) => {
                          return <GalleriePreview key={gallerie.id} {...gallerie} />
                      })}
                  </div>
              }
           </React.Fragment>
       )
    }
  }
  
  export default connect(mapStateToProps, null)(Galleries);