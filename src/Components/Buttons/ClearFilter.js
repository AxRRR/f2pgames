import React from 'react';
import { useDispatch } from 'react-redux';
import { saveGamesData } from '../../actions/game';
import { useAxiosWithParams } from '../../hooks/useAxios';
import classes from './ClearFilter.module.css'

export const ClearFilter = () => {

    const dispatch = useDispatch();

    const { resp, error } = useAxiosWithParams({
        methodname: 'GET',
        parameter1: 'sort-by',
        parameter2: 'popularity',
    });
    
    const handleClearFilter = (e) => {
        e.preventDefault();
        dispatch(saveGamesData(resp));
    }
    
    return (
        <div>
            <button onClick={handleClearFilter} className={classes.button}>Clear</button>
        </div>
    );
};
