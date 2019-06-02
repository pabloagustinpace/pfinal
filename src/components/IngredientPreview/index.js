import React from 'react';
import { Link } from 'react-router-dom';
import nullimage from '../../images/nullimage.png';
import './style.scss';

const IngredientPreview = ({id,image,name}) => {
  return(
  <div className="card">
    <Link to={`/ingredients/${id}`}>
      <img src={image ? image.url : nullimage}/>
    </Link>
    <div className="container">
      <h4><b>{name}</b></h4> 
    </div>
  </div>
  )
}

export default IngredientPreview;