export const UPDATE_POPULAR_MOVIES = 'UPDATE_POPULAR_MOVIES';

// State Types
export interface popularMovie {
    poster_path: string;
    id: number;
    title: string;
    vote_average: number;
}

export interface popularMovies {
    popularMovies: popularMovie[]
}

// Action Types
interface popularMoviesAction { 
    type: typeof UPDATE_POPULAR_MOVIES,
    payload: popularMovie,
}

export type popularMoviesActionsTypes = popularMoviesAction;