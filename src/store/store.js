import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { gameReducer } from '../Reducers/gameReducer';
import { selectReducer } from '../Reducers/selectReducer';

const reducers = combineReducers({
    game: gameReducer,
    select: selectReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)