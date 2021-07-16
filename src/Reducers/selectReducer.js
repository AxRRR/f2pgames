export const selectReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case 'gselect':
            return action.id

        default:
            return state;
    }
}