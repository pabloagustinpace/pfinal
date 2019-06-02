import React from 'react';
import { Link } from 'react-router-dom';
import nullimage from '../../images/nullimage.png';
import './style.scss';

const RecipePreview = ({id,main_image,title,chef,prep_time}) => {
  return(
  <div className="card">
    <Link to={`/recipes/${id}`}>
      <img src={main_image ? main_image.url : nullimage}/>
    </Link>
      <h4><b>{title}</b></h4> 
      <p>by: {chef.full_name}</p>
      <p>Tiempo: {prep_time}</p>
  </div>
  )
}

export default RecipePreview;