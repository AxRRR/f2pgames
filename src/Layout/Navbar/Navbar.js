import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

export const Navbar = () => {
    return (
        <Fragment>
            <ul className={classes.ListStyle}>
                <li className={classes.Item}>F2PGames</li>
                <Link to="/home">
                    <li className={classes.Item}>Home</li>
                </Link>
                <Link to="/games">
                    <li className={classes.Item}>Games</li>
                </Link>
                <Link to="/search">
                    <li className={classes.Item}>Search</li>
                </Link>
            </ul>
        </Fragment>
    );
};
