import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveGameDetails } from '../../actions/select';
import { useAxiosWithParams } from '../../hooks/useAxios';
import classes from './Popular.module.css'

export const Popular = (props) => {
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
        parameter6: 'popularity',
    });

    return (
        <div>
            <div className={classes.container}>
            <p className={classes.titleheader}>Popular games:</p>
            {resp !== null && resp.slice(0,8).map((r) => (
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
                    </div>
        </div>
    );
};
