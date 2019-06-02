import React from 'react';
import { Link } from 'react-router-dom';

const GalleriePreview = ({id,title}) => {
  return(
  <div>
    <Link to={`/galleries/${id}`}>
    <p>{title}</p>
    </Link>
  </div>
  )
}

export default GalleriePreview;