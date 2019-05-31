import React from 'react';
import { Link } from 'react-router-dom';

const ingdet = ({ title, id, url}) => (
<div class="card">
<img src={url} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">{title}</h5>
  <p class="card-text">{id}</p>
</div>
<div class="card-body">
  <a href="#" class="card-link"><Link to='/'>Volver a la lista</Link></a>
</div>
</div>
);

export default ingdet;