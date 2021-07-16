import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveGameDetails } from '../../actions/select';
import { useAxiosWithParams } from '../../hooks/useAxios';
import classes from './Popular.module.css'

export const Popular = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.game);
    const [incrementList, setIncrementList] = useState(6);

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
        parameter6: 'popularity',
    });

    const handleIncrementList = () => setIncrementList(incrementList+3);

    return (
        <div>
            <div className={classes.container}>
            <p className={classes.titleheader}>Popular games:</p>
            {resp !== null && resp.slice(0,incrementList).map((r) => (
                    <img 
                        src={r.thumbnail} 
                        alt={r.title}
                        className={classes.img}
                        onClick={() =>
                            handleDetailsGame({
                              id: r.id,
                            })}
                    />
                    ))}
                {incrementList < 15 && <button 
                className={classes.button}
                onClick={handleIncrementList}>View more...
                </button>}
                {incrementList >= 15 && <Link to='/games'>
                    <button 
                        className={classes.button}>See all games
                    </button>
                    </Link>
                }
                </div>
        </div>
    );
};
