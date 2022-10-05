import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    const copy = [...state]

    switch (action.type) {

        case 'sort': { // by name
            debugger
            return action.payload === "up" ? copy.sort((a, b) => a.name > b.name ? 1 : -1) :
                copy.sort((a, b) => a.name < b.name ? 1 : -1) // need to fix
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
