import React, { useState, useEffect } from 'react';

import Item from '../Item';
import { getPopular } from '../../services/getPopular';
import { popularMovies } from '../../types/movies';

import { Container } from './styled';

const List = () => {

    const [moviesList, setMoviesList] = useState<popularMovies>([]);

    useEffect(() => {
        getPopular().then( (movies: popularMovies) => setMoviesList( movies ))
    }, [])

    return (
        <>
            <h2>Popular Movies</h2>
            <Container>
                { moviesList
                    ? moviesList.map( movie => {
                        return <Item key={ movie.id } movie={ movie } />
                    })
                    : null
                }
            </Container>
        </>
    )
}

export default List;
