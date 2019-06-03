import React from 'react';
import { Link } from 'react-router-dom';
import nullimage from '../../images/nullimage.png';
import './style.scss';
//☆

const RecipePreview = ({id,main_image,title,chef,prep_time,rating}) => {
  return(
  <div className="card_food">
    <Link to={`/recipes/${id}`}>
      <img alt="" src={main_image ? main_image.url : nullimage}/>
    </Link>
      <h4><b>{title}</b></h4> 
      <p>Chef: {chef.full_name}</p>
      <p>Tiempo: {prep_time}</p>
      <p className="star_color"> {rating}/5 ★ </p>  
  </div>
  )
}

export default RecipePreview;