import { URL_API, API_TOKEN } from '../utils/const';

export const getPopular = ( type: string | undefined = 'movie' ): any => {

    return fetch(`${ URL_API }${ type }/popular?${ API_TOKEN }`)
        .then( res => res.json() )
        .then( data => {
            const { results } = data;
            return results;
        } )
        .catch( err => console.log( err ))

}
