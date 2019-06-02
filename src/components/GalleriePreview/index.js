import React from 'react';
import { Link } from 'react-router-dom';
import nullimage from '../../images/nullimage.png';
import './style.scss';

const GalleriePreview = ({id,title,photos}) => {
  return(
  <div className="card">
    <Link to={`/galleries/${id}`}>
      <img src={photos ? photos[0].url : nullimage}/>
    </Link>
      <h4><b>{title}</b></h4> 
  </div>
  )
}

export default GalleriePreview;