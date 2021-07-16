import React, { useState } from 'react';
import { Details } from './Components/Details/Details';
import { Games } from './Components/Games/Games';
import { ShowFilter } from './UI/ShowFilter';
import { Navbar } from './Layout/Navbar/Navbar';
import { Route } from 'react-router-dom';
import { Recent } from './Components/components-games/Recent';
import { Container } from './UI/Container';
import { Popular } from './Components/components-games/Popular';
import { Find } from './Components/components-games/Find';
import { Footer } from './Layout/Footer/Footer';

export const IndexPage = () => {
    const [showModal, setShowModal] = useState(true);
    const showModalHandler = () => { setShowModal(true); };
    const hideModalHandler = () => { setShowModal(false); };

    return (
        <div>
            <Route exact path='/home'>
                <Navbar />
                <Container>
                    <Recent onShowModal={showModalHandler} />
                    <Popular onShowModal={showModalHandler} />
                </Container>
            </Route>
            <Route exact path='/games'>
                <Navbar />
                <ShowFilter />
                <Games onShowModal={showModalHandler} />
            </Route>
            <Route exact path='/search'>
                <Navbar />
                <Find onShowModal={showModalHandler} />
                <Games onShowModal={showModalHandler} />
            </Route>
            {showModal && <Details onClose={hideModalHandler} /> }
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
