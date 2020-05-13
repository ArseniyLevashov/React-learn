import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) =>{

    return <header className={s.header}>


    <nav className={s.nav_l}>

        <img className={s.logo} src="../src/pic/1.png"></img>

        <NavLink className={s.h_link} to="/main" activeClassName={s.activeLink}>Main</NavLink>
        <NavLink className={s.h_link} to="/Diets">Diets</NavLink>
        <a className={s.h_link} href="https://reactjs.org/docs/getting-started.html">Learn React</a>

        <a className={s.h_link} href="https://github.com/ArseniyLevashov">About Me</a>
        
    </nav>

        </header>
}

export default Header;