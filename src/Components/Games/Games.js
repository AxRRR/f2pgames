import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveGameDetails } from '../../actions/game';
import { Details } from '../Details/Details';
import classes from './Games.module.css';

export const Games = () => {
const [gamesdata, setGamesData] = useState([]);
const dispatch = useDispatch();

useEffect(() => { getGames(); }, []);

const getGames = async () => {
    const config = {
        method: 'get',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'x-rapidapi-key': '07089da5c1msh4207da2f8fccca3p171009jsn2878b94e6662',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  }
      };
      
      axios(config)
      .then(function (response) {
        setGamesData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      
}

const handleDetailsGame = ( getDataDetailsInd ) => {
    dispatch(
        saveGameDetails( getDataDetailsInd )
    );
}

const RenderGames = gamesdata.slice(0, 8)

    return (
        <Fragment>
            <div className={classes.Container}>
                <ul>
                {gamesdata.length >= 1 ? RenderGames.map((e) => (
                        <li 
                            key={e.id}
                            className={classes.ListStyle}>
                                <div 
                                    className={classes.Content}
                                    onClick={() => handleDetailsGame({
                                        id: e.id
                                    })}>
                                    <img 
                                        src={e.thumbnail} 
                                        alt={e.title} 
                                        className={classes.Img}
                                    />
                                    <p className={classes.Title}>{e.title}</p>
                                    <p className={classes.Desc}>{e.short_description}</p>
                                </div>
                        </li>
                    ))
                    : <p>Ocurrió un error al cargar la base de datos</p> }
                </ul>
            </div>
        </Fragment>
    );
};
