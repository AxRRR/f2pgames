import React, { Fragment } from 'react';
import classes from './Navbar.module.css'

export const Navbar = () => {
    return (
        <Fragment>
            <ul className={classes.ListStyle}>
                <li className={classes.Item}>F2PGames</li>
                <li className={classes.Item}>Inicio</li>
                <li className={classes.Item}>Categorias</li>
                <li className={classes.Item}>Buscar</li>
                <li className={classes.ItemLogin}>Iniciar sesión</li>
            </ul>
        </Fragment>
    );
};
