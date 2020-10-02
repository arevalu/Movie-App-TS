import { popularMovie, UPDATE_POPULAR_MOVIES, popularMoviesActionsTypes } from '../types/popularTypes';

export function updatePopularMovies( popularMovie: popularMovie ): popularMoviesActionsTypes {
    return {
        type: UPDATE_POPULAR_MOVIES,
        payload: popularMovie,
    }
}