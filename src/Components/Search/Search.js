import React, { Fragment, useEffect, useState } from 'react';

export const SearchByPlatform = ( sPlatform ) => {
    const axios = require("axios").default;
    const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {
        platform: sPlatform
    },
        headers: {
            'x-rapidapi-key': '07089da5c1msh4207da2f8fccca3p171009jsn2878b94e6662',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export const SearchByCategory = ( sCategory ) => {
    const [resSearch, setresSearch] = useState([]);
    const axios = require("axios").default;
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {category: sCategory},
            headers: {
                'x-rapidapi-key': '07089da5c1msh4207da2f8fccca3p171009jsn2878b94e6662',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    axios.request(options).then(function (response) {
        console.log(response.data);
        setresSearch(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <Fragment>
            <ul>
            {resSearch.map((s) => 
            <il>
                <h1>{s.title}, {s.description}</h1>
            </il>
            )}
            </ul>
        </Fragment>
    );
};

export const SearchByTag = ( sTag ) => {
    const axios = require("axios").default;
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {'sort-by': sTag},
        headers: {
          'x-rapidapi-key': '07089da5c1msh4207da2f8fccca3p171009jsn2878b94e6662',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export const SearchByMulti = ( sPlatform, sCategory, sTag ) => {
    const axios = require("axios").default;
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {platform: sPlatform, category: sCategory, 'sort-by': sTag},
        headers: {
          'x-rapidapi-key': '07089da5c1msh4207da2f8fccca3p171009jsn2878b94e6662',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

