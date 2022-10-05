const initState = {
    themeId: 1,
}
type InitiStateType = typeof initState
type ActionType = ChangeThemeIdType

export const themeReducer = (state: InitiStateType = initState, action: ActionType): InitiStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}


type ChangeThemeIdType = {
    type:  'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
