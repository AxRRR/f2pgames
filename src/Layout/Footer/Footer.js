import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css'

export const Footer = () => {
    return (
        <Fragment>
            <div className={classes.container}>
                <p className={classes.text}>Webside by AxR Alex Luna 2021</p>
                <p className={classes.text}>API used <a href='https://www.freetogame.com/api-doc'>freetogame</a></p>
            </div>
        </Fragment>
    );
};
