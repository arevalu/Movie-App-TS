import { URL_API, API_TOKEN } from '../utils/const';
import { popularMovies } from '../types/movies';

export const getPopular = ( type: string | undefined = 'movie' ): Promise<popularMovies> => {

    return fetch(`${ URL_API }${ type }/popular?${ API_TOKEN }`)
        .then( res => res.json() )
        .then( data => {
            const { results } = data;
            return results;
        } )
        .catch( err => console.log( err ))

}
