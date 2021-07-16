import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveGameDetails } from '../../actions/select';
import { useAxiosWithParams } from '../../hooks/useAxios';
import classes from './Recent.module.css'

export const Recent = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.game);
    const [incrementList, setIncrementList] = useState(9);

    useEffect(() => {}, [state]);
  
    const handleDetailsGame = (getDataDetailsInd) => {
      dispatch(saveGameDetails(getDataDetailsInd));
      props.onShowModal();
    };

    const { resp } = useAxiosWithParams({
        methodname: 'GET',
        parameter1: 'platform',
        parameter2: 'pc',
        parameter3: '',
        parameter4: '',
        parameter5: 'sort-by',
        parameter6: 'release-date',
    });

    const handleIncrementList = () => setIncrementList(incrementList+5);

    return (
        <div>
            <p className={classes.titleheader}>Latest games:</p>
            {resp !== null && resp.slice(0,incrementList).map((r) => (
                <div 
                    className={classes.container}
                    onClick={() =>
                        handleDetailsGame({
                          id: r.id,
                        })}>
                    <img 
                        src={r.thumbnail} 
                        alt={r.title}
                        className={classes.img}
                    />
                    <p className={classes.infogame1}>{r.title}</p>
                    <p className={classes.infogame2}>{r.short_description}</p>
                    <p className={classes.infogame3}>{r.release_date}</p>
                    <p className={classes.infogame4}>{r.platform}</p>
                </div>
            ))}
            {incrementList < 20 && <button 
                className={classes.button}
                onClick={handleIncrementList}>View more...
            </button>}
            {incrementList >= 20 && <Link to='/games'>
                <button 
                    className={classes.button}>See all games
                </button>
                </Link>
            }
        </div>
    );
};
