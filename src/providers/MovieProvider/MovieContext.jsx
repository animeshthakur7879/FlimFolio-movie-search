import {createContext, useReducer}  from "react";
import { MovieReducer } from "./MovieReducer";
import fetchTrending from "./MovieAction";

const MovieContext = createContext()

export const  MovieProvider = ({children}) => {

    const initialState = {
        movieData : []
    }


    const [state , dispatch] = useReducer(MovieReducer , initialState)


    return(
        <MovieContext.Provider value = {{...state , dispatch}}>
            {children}
        </MovieContext.Provider>
    )
    
}


export default MovieContext