import React from 'react';
import { Link } from 'react-router-dom';
import nullimage from '../../images/nullimage.png';
import './style.scss';

const ChefPreview = ({id,full_name,image}) => {
  return(
  <div className="card_chef">
    <Link to={`/chefs/${id}`}>
      <img alt="" src={image ? image.url : nullimage}/>
    </Link>
      <h4><b>{full_name}</b></h4> 
  </div>
  )
}

export default ChefPreview;