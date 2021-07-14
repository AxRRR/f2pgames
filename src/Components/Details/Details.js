import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../../UI/Card';
import Modal from '../../UI/Modal';
import classes from './Details.module.css'

export const Details = (props) => {
    const [gdetails, setgDetails] = useState(0);
    const state = useSelector((state) => state.game);

    useEffect(() => {
        getDetailsGame();
    }, [state]);

    const getDetailsGame = async () => {
        const axios = require("axios").default;
        const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {
            id: state.id
        },
            headers: {
                'x-rapidapi-key': '07089da5c1msh4207da2f8fccca3p171009jsn2878b94e6662',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setgDetails(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }
    return (
        <Fragment>
            {gdetails != 0 &&
            <Modal onClose={props.onClose}>
                <Card>
                    <img 
                        src={gdetails.thumbnail} 
                        alt={gdetails.title} 
                        className={classes.img} />
                    <p className={classes.title}>{gdetails.title}</p>
                    <p className={classes.text}>{gdetails.short_description}</p>
                    <p className={classes.text}>{gdetails.developer}</p>
                    <p className={classes.text}>{gdetails.release_date}</p>
                    <p className={classes.text}>{gdetails.game_url}</p>
                    <p className={classes.text}>{gdetails.genre}</p>
                    <p className={classes.text}>Requirements:</p>
                    <div className={classes.specbox}>
                        <p className={classes.text}>{gdetails.minimum_system_requirements.os}</p>
                        <p className={classes.text}>{gdetails.minimum_system_requirements.graphics}</p>
                        <p className={classes.text}>{gdetails.minimum_system_requirements.memory}</p>
                        <p className={classes.text}>{gdetails.minimum_system_requirements.processor}</p>
                        <p className={classes.text}>{gdetails.minimum_system_requirements.storage}</p>
                    </div>
                    <div className={classes.gallerybox}>
                        {gdetails.screenshots.map((i) => (
                            <img src={i.image} alt={i.image} className={classes.screenshots} /> 
                        ))}
                    </div>
                </Card>
            </Modal>
            }
        </Fragment>
    );
};
