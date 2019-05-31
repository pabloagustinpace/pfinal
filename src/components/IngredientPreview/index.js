import React from 'react';
import { Link } from 'react-router-dom';
import nullimage from '../../images/nullimage.png';

const IngredientPreview = ({id,image,name}) => {
  return(
  <div>
    <Link to={`/ingredients/${id}`}>
    <img src={image ? image.url : nullimage}/>
    </Link>/>
      <p>{name}</p>
  </div>
  )
}

export default IngredientPreview;