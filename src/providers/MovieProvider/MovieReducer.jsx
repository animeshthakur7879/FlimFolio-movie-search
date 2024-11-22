import fetchTrending from "./MovieAction"

export const MovieReducer = (state , action ) => {
    switch(action.type){
        case "GET_MOVIE" : {
            return{
                ...state , 
                movieData : action.payload 
            }
        }
        case "SEARCH" : {
            return{
                ...state , 
                movieData : action.payload
            }
        }
    }
}