import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import logo from '../../images/logo.png';
import './style.css';

const Nav = () => {
    return(
    <nav className="main-nav">
            <Link to={routes.HOME}><img src={logo} /></Link>
            <Link to={routes.RECIPES}>Recetas</Link>
            <Link to={routes.CHEFS}>Chefs</Link>
            <Link to={routes.INGREDIENTS}>Ingredientes</Link>
            <Link to={routes.GALLERIES}>Galerias</Link>
            <p>The best recipes</p>
    </nav>
    )

}

export default Nav;