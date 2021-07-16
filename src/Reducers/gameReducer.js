export const gameReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case 'gdata':
            return action.payload
        case 'gtitle':
            return {GetGamesData: state.GetGamesData.filter(getTitle => getTitle.title === action.payload.GetTitleToFilter)}
            
        default:
            return state;
    }
}