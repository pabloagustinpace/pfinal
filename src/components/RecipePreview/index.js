import React from 'react';
import { Link } from 'react-router-dom';

const RecipePreview = ({id,title}) => {
return(
    <div>
        <Link to={`/recipes/${id}`}>
          <p>{title}</p>
        </Link>
    </div>
    )
}

export default RecipePreview;