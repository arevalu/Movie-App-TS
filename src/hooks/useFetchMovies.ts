import { useState, useEffect } from 'react';

import { getPopular } from '../services/getPopular';
import { popularMovies } from '../types/movies';

type IState = {
    dataMovies: popularMovies,
    loading: boolean,
};

export const useFetchMovies = () => {

    const [state, setState] = useState<IState>({
        dataMovies: [],
        loading: true,
    });

    useEffect(() => {
        getPopular()
            .then((movies) => {
                setState({
                    dataMovies: movies,
                    loading: false,
                })
            })
            .catch( err => console.log('ERROR', err ) );
    }, []);

    return state;

};