import { popularMovie, popularMovies, popularMoviesActionsTypes, UPDATE_POPULAR_MOVIES } from '../types/popularTypes';

const initialState: popularMovies = {
    popularMovies: []
}

export const themeReducer = ( 
    state = initialState, 
    action: popularMoviesActionsTypes ): popularMovies => {
        switch( action.type ) {
            case UPDATE_POPULAR_MOVIES :
                return {
                    popularMovies: [...state.popularMovies, action.payload]
                }
            default:
                return state;
        } 
            
    }