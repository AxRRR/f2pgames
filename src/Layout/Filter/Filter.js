import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveGamesData } from '../../actions/game';
import { ClearFilter } from '../../Components/Buttons/ClearFilter';
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
    })

    const { filterplatform, filtergenre, filtertags } = form
    
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
        if(resp !== null) {
            dispatch(
            saveGamesData(resp)
        );
        }
    }, [resp, error]);


    const handleSearch = (e) => {
        e.preventDefault();
        setSaveData({
            platform: 'platform', 
            parameter1: filterplatform,
            category: 'category',
            parameter2: filtergenre,
            tag: 'sort-by',
            parameter3: filtertags,
        })
    }

    const genre = ['mmorpg', 'shooter', 'strategy', 
                'moba', 'racing', 'sports', 'social', 'sandbox', 
                'open-world', 'survival', 'pvp',' pve', 'pixel', 
                'voxel', 'zombie', 'turn-based', 'first-person', 
                'third-Person', 'top-down', 'tank', 'space', 'sailing', 
                'side-scroller', 'superhero', 'permadeath', 'card', 
                'battle-royale', 'mmo', 'mmofps', 'mmotps', 'anime', 'fantasy', 
                'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 
                'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'];

    return (
        <Fragment>
            <form onSubmit={handleSearch}>
                <div className={classes.container}>           
                    <select 
                        type='text'
                        name="filterplatform"
                        onChange={handlerInputChange}
                        className={classes.platform}>
                            <option value=''>platform</option>
                            <option value='pc'>Windows PC</option>
                            <option value='browser'>Browser Web</option>
                    </select>
                    <select 
                        name='filtergenre'
                        onChange={handlerInputChange}
                        className={classes.genre}>
                            <option value=''>genre</option>
                            {genre.map((g) => (
                                <option value={g}>{g}</option>
                            ))}
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
                    <ClearFilter />
                </div>
            </form>
        </Fragment>
    );
};
