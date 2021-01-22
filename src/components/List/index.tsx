import React from 'react';

import Item from '../Item';
import { popularMovie } from '../../types/movies';

import { ListContainer, Container } from './styled';
import { useFetchMovies } from '../../hooks/useFetchMovies';

const List = () => {

    const { dataMovies } = useFetchMovies();

    return (
        <ListContainer>
            <h2>Popular Movies</h2>
            <Container>
                {dataMovies && dataMovies.map((movie: popularMovie) => {
                    return <Item key={movie.id} movie={movie} />
                })
                }
            </Container>
        </ListContainer>
    )
}

export default List;
