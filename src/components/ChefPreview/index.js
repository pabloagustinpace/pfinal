import React from 'react';
import { Link } from 'react-router-dom';
import nullimage from '../../images/nullimage.png';

const ChefPreview = ({id,full_name,image}) => {
  return(
  <div>
    <Link to={`/chefs/${id}`}>
    <img src={image.url}/>
    </Link>
    <p>{full_name}</p>
  </div>
  )
}

export default ChefPreview;