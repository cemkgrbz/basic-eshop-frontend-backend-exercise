import { createContext, useReducer } from "react";

export const AppContext = createContext();

export default function ContextProvider({children}) {

    const reducer = (state, action) => {

        switch(action.type) {
            case 'login':
                return {
                    ...state,
                    user: {...action.payload}
                }

            case 'loadUsers':
                return {
                    ...state,
                    users: [...action.payload]
                }

            case 'removeUser':
    
                    const oldUsers = [...state.users.filter(item => item._id !== action.payload)]
                    return {
                        ...state, 
                        users: [...oldUsers]
                    }

                default:

                return state
        }
    }

    const [state, dispatchState] = useReducer(reducer, {
        user: {},
        users: [],
        products: []
    })

    return <AppContext.Provider value={{state, dispatchState}}>
        {children}
    </AppContext.Provider>
} 