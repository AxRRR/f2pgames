import React, { Fragment } from 'react';
import { SearchByCategory, SearchByMulti, SearchByPlatform, SearchByTag } from '../../Components/Search/Search';
import { useFormAutomatic } from '../../hooks/useFormAutomatic';
import classes from './Filter.module.css'

export const Filter = () => {
    const [form, handlerInputChange] = useFormAutomatic({
        filterplatform: '',
        filtergenre: '',
        filtertags: ''
    })
    
    const { filterplatform, filtergenre, filtertags } = form

    const handleSearch = (e) => {
        e.preventDefault();
        if(!!filterplatform && !!filtergenre && !!filtertags) 
            SearchByMulti(filterplatform, filtergenre, filtertags)
        else if(!!filterplatform && !!filtergenre) 
            SearchByMulti(filterplatform, filtergenre)
        else if(!!filtertags && !!filtergenre) 
            SearchByMulti(filtertags, filtergenre)
        else if(!!filterplatform && !!filtergenre) 
            SearchByMulti(filterplatform, filtertags)
        else if(!!filterplatform) 
            SearchByPlatform(filterplatform);
        else if(!!filtergenre) 
            SearchByCategory(filtergenre);
        else if(!!filtertags) 
            SearchByTag(filtertags);
    }

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
                            <option value='pc'>PC</option>
                            <option value='browser'>Browser</option>
                    </select>
                    <select 
                        name='filtergenre'
                        onChange={handlerInputChange}
                        className={classes.genre}>
                            <option value=''>genre</option>
                            <option value='shooter'>Shooter</option>
                            <option value='PVP'>PVP</option>
                            <option value='Rol'>Rol</option>
                            <option value='survival'>Survival</option>
                    </select>
                    <select 
                        name="filtertags"
                        onChange={handlerInputChange}
                        className={classes.year}>
                            <option value=''>tags</option>
                            <option value='recently'>Most recently</option>
                            <option value='popularity'>Most popularity</option>
                            <option value='alphabetical'>Alphabetical</option>
                    </select>
                    <button
                        type="submit"
                        className={classes.button}>
                            Search
                    </button>
                </div>
            </form>
        </Fragment>
    );
};
