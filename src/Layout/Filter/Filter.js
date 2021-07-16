import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterGamesTitle, saveGamesData } from '../../actions/game';
import { useAxiosWithParams } from '../../hooks/useAxios';
import { useFormAutomatic } from '../../hooks/useFormAutomatic';
import classes from './Filter.module.css'

export const Filter = () => {
    const [saveData, setSaveData] = useState('');

    const dispatch = useDispatch();
    const [form, handlerInputChange] = useFormAutomatic({
        filterplatform: '',
        filtergenre: '',
        filtertags: '',
        filtertitle: ''
    })

    const { resp, error } = useAxiosWithParams({
        methodname: 'GET',
        parameter1: saveData.platform,
        parameter2: saveData.parameter1,
        parameter3: saveData.category,
        parameter4: saveData.parameter2,
        parameter5: saveData.tag,
        parameter6: saveData.parameter3,
    });

    useEffect(() => {
            dispatch(
            saveGamesData(resp)
        );
    }, [resp, error]);

    const { filterplatform, filtergenre, filtertags, filtertitle } = form

    const handleSearch = (e) => {
        e.preventDefault();
        if(filtertitle.length > 1){
            dispatch(filterGamesTitle(filtertitle));
            console.log(filtertitle)
        }
        setSaveData({
            platform: 'platform', 
            parameter1: filterplatform,
            category: 'category',
            parameter2: filtergenre,
            tag: 'sort-by',
            parameter3: filtertags,
        })
    }

    return (
        <Fragment>
            <form onSubmit={handleSearch}>
                <div className={classes.container}>
                    <textarea 
                        type='text' 
                        name='filtertitle' 
                        onChange={handlerInputChange} 
                        className={classes.title}
                        placeholder='search game' />
                    <select 
                        type='text'
                        name="filterplatform"
                        onChange={handlerInputChange}
                        className={classes.platform}>
                            <option value=''>platform</option>
                            <option value='pc'>PC</option>
                            <option value='browser'>Browser</option>
                    </select>
                    <select 
                        name='filtergenre'
                        onChange={handlerInputChange}
                        className={classes.genre}>
                            <option value=''>genre</option>
                            <option value='shooter'>Shooter</option>
                            <option value='mmorpg'>MMORPG</option>
                            <option value='strategy'>Strategy</option>
                            <option value='survival'>Survival</option>
                    </select>
                    <select 
                        name="filtertags"
                        onChange={handlerInputChange}
                        className={classes.year}>
                            <option value=''>tags</option>
                            <option value='release-date'>Most recent</option>
                            <option value='popularity'>Most popular</option>
                            <option value='alphabetical'>Alphabetical</option>
                    </select>
                    <button
                        type="submit"
                        className={classes.button}>
                            Apply
                    </button>
                </div>
            </form>
        </Fragment>
    );
};
