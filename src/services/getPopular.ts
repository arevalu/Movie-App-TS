import { URL_API, API_TOKEN } from '../utils/const';
import { popularMovies } from '../types/movies';
import { getGenres } from '../utils/getGenres';

export const getPopular = async ( type: string | undefined = 'movie' ): Promise<popularMovies> => {

    const res = await fetch(`${ URL_API }${ type }/popular?${ API_TOKEN }`);
    const { results } = await res.json();

    const movies = results.map( (movie: any) => {

        let genres_movie: string[] = [];
        movie.genre_ids.map( (genre: number) => genres_movie.push( getGenres( genre ) ));
        
        return {
            backdrop_path: movie.backdrop_path,
            genre_ids: genres_movie,
            id: movie.id,
            overview: movie.overview,
            poster_path: movie.poster_path,
            title: movie.original_title,
            vote_average: movie.vote_average,
        }
    });

    return movies;

}
