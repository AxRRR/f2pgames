import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveGameDetails } from '../../actions/select';
import { useAxiosWithParams } from '../../hooks/useAxios';
import classes from './Recent.module.css'

export const Recent = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.game);

    useEffect(() => {}, [state]);
  
    const handleDetailsGame = (getDataDetailsInd) => {
      dispatch(saveGameDetails(getDataDetailsInd));
      props.onShowModal();
    };

    const { resp, error } = useAxiosWithParams({
        methodname: 'GET',
        parameter1: 'platform',
        parameter2: 'pc',
        parameter3: '',
        parameter4: '',
        parameter5: 'sort-by',
        parameter6: 'release-date',
    });

    return (
        <div>
            <p className={classes.titleheader}>Latest games:</p>
            {resp !== null && resp.slice(0,6).map((r) => (
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
        </div>
    );
};
