
export const saveGamesData = ( GetGamesData ) => ({
    type: 'gdata',
    payload: {
        gamesdata: GetGamesData
    }
})

export const filterGamesTitle = ( GetTitleToFilter ) => ({
    type: 'gtitle',
    payload: {
        GetTitleToFilter
    }
})