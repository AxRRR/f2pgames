
export const saveGamesData = ( GetGamesData ) => ({
    type: 'gdata',
    payload: {
        GetGamesData
    }
})

export const filterGamesTitle = ( GetTitleToFilter ) => ({
    type: 'gtitle',
    payload: {
        GetTitleToFilter
    }
})