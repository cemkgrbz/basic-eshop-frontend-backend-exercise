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
                default:

                return state
        }
    }

    const [state, dispatchState] = useReducer(reducer, {
        user: {}
    })

    return <AppContext.Provider value={{state, dispatchState}}>
        {children}
    </AppContext.Provider>
} 