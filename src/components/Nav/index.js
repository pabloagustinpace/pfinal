import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

export const Nav = () => {
    <nav>
        <ul>
            <li><Link to={routes.HOME}>Globant logo</Link></li>
            <li><Link to={routes.RECIPES}>Recetas</Link></li>
            <li><Link to={routes.CHEFS}>Chefs</Link></li>
            <li><Link to={routes.INGREDIENTS}>Ingredientes</Link></li>
            <li><Link to={routes.GALERIES}>Galerias</Link></li>
            <p>The best recipes</p>
        </ul>
    </nav>

}