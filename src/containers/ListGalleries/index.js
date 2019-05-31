import React from 'react';
import { connect } from 'react-redux';
import { getGalleries } from '../../redux/actions'
import ReactMarkdown from 'react-markdown';

const mapStateToProps = (state) => ({
    loading: state.galleries.isGalleriesLoading === true,
    galleries: state.galleries.galleries
});

class Galleries extends React.Component {
    componentWillMount(){
      this.props.dispatch(getGalleries());
    }
  
    render() {
       return (
           <React.Fragment>
              {this.props.loading ? <p>CARGANDO....</p>:
                  <div>
                      <h1>Tenemos {this.props.galleries.length} galerias</h1>
                      {this.props.galleries.map(gallerie => {
                          return <ReactMarkdown key={gallerie._id} source={gallerie.title} />
                      })}
                  </div>
              }
           </React.Fragment>
       )
    }
  }
  
  export default connect(mapStateToProps, null)(Galleries);