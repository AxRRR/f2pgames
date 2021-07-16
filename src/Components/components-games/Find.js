import React from 'react';
import { useDispatch } from 'react-redux';
import { filterGamesTitle } from '../../actions/game';
import { useFormAutomatic } from '../../hooks/useFormAutomatic';
import { ClearFilter } from '../Buttons/ClearFilter';
import classes from './Find.module.css'

export const Find = () => {
    const dispatch = useDispatch();

    const [form, handlerInputChange] = useFormAutomatic({
        findname: ''
    })

    const { findname } = form

    const handleFindGame = (e) => {
        e.preventDefault();
        if(findname.length > 1){
            dispatch(filterGamesTitle(findname));
        }
    }
    return (
        <div>
            <form onSubmit={handleFindGame}>
                <div className={classes.container}>
                    <input 
                        type='text' 
                        name='findname' 
                        onChange={handlerInputChange} 
                        className={classes.find}
                        placeholder='Search' 
                    />
                    <button 
                        type='submit'
                        className={classes.button}>
                        Search
                    </button>
                    <ClearFilter />
                </div>
            </form>
        </div>
    );
};
