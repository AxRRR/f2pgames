export const gameReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case 'gdata':
            return action.payload
        case 'gtitle':
            return state.gamesdata.filter(getTitle => getTitle.title === action.payload.GetTitleToFilter);

        default:
            return state;
    }
}