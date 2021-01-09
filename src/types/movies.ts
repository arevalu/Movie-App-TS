export type popularMovie = {
    backdrop_path: string;
    genre_ids: string[];
    id: number;
    overview: string;
    poster_path: string;
    title: string;
    vote_average: number;
}

export type popularMovies = (popularMovie)[];