import { Provider } from "react-redux"
import { IndexPage } from "./IndexPage"
import { store } from "./store/store"

export const F2pGamesApp = () => {
    return <Provider store={ store }>
        <IndexPage />
    </Provider>
}