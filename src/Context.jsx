import { createContext,useReducer } from "react";


export const themeContext=createContext();

const inititalState={darkmode:true};

const themeReducer=(state,action)=>{
    switch(action.type){
        case 'toggle':
            return {darkmode:!state.darkmode};
        default:
            return state;
    }
};

export const ThemeProvider= (props)=>{
    const [state,dispatch]=useReducer(themeReducer,inititalState);
    return (
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}