import React from 'react';
import { Link } from 'react-router-dom';
import nullimage from '../../images/nullimage.png';
import './style.scss';

const IngredientPreview = ({id,image,name}) => {
  return(
  <div className="card">
    <Link to={`/ingredients/${id}`}>
      <img alt="" src={image ? image.url : nullimage}/>
    </Link>
      <h4><b>{name}</b></h4> 
  </div>
  )
}

export default IngredientPreview;