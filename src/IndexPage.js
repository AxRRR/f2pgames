import React, { useState } from 'react';
import { Details } from './Components/Details/Details';
import { Games } from './Components/Games/Games';
import { Navbar } from './Header/Navbar/Navbar';

export const IndexPage = () => {
    const [showModal, setShowModal] = useState(true);

    const showModalHandler = () => { setShowModal(true); };
    const hideModalHandler = () => { setShowModal(false); };

    return (
        <div>
            <Navbar />
            <Games onShowModal={showModalHandler} />
            {showModal && <Details onClose={hideModalHandler} /> }
        </div>
    );
};
