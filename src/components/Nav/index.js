import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import logo from '../../images/logo.png';
import './style.scss';

const Nav = () => {
    return(
    <nav className="main-nav">
            <Link to={routes.HOME} className="main-nav__link"><img alt="" src={logo} /></Link>
            <Link to={routes.RECIPES} className="main-nav__link">Recetas</Link>
            <Link to={routes.CHEFS} className="main-nav__link">Chefs</Link>
            <Link to={routes.INGREDIENTS} className="main-nav__link">Ingredientes</Link>
            <Link to={routes.GALLERIES} className="main-nav__link">Galerias</Link>
            <p>The best recipes</p>
    </nav>
    )

}

export default Nav;