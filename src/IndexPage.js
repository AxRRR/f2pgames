import React from 'react';
import { Games } from './Components/Games/Games';
import { Navbar } from './Header/Navbar/Navbar';

export const IndexPage = () => {
    return (
        <div>
            <Navbar />
            <Games />
        </div>
    );
};
