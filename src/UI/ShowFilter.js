import React, { Fragment, useState } from 'react';
import { Filter } from '../Layout/Filter/Filter';

import classes from './ShowFilter.module.css'

export const ShowFilter = () => {
    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilter = () => {
        setShowFilter(true);
    }

    const handleCloseFilter = () => {
        setShowFilter(false);
    }

    return (
        <Fragment>
            <div className={classes.container}>
                
                <p 
                    className={classes.filterstyle}
                    onClick={handleShowFilter}>Filter games</p>
                {showFilter && <Filter onCloseFilter={handleCloseFilter} />}
            </div>
        </Fragment>
    );
};