import React from 'react';

const ChefPreview = ({_id,full_name,image}) => {
  return(
  <div>
    <img src={image.url}/>
    <p className="card-text">{full_name}</p>
  </div>)
}

export default ChefPreview;