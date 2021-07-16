import { Provider } from "react-redux"
import { IndexPage } from "./IndexPage"
import { store } from "./store/store"
import { BrowserRouter } from 'react-router-dom'

export const F2pGamesApp = () => {
    return <Provider store={ store }>
        <BrowserRouter><IndexPage /></BrowserRouter>
    </Provider>
}