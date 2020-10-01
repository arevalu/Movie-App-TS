import React from 'react';

import MovieItem from '../MovieItem';

import { Container } from './styled';

const MoviesList = () => {
    return (
        <Container>
            <MovieItem />
            <MovieItem /> 
            <MovieItem /> 
            <MovieItem /> 
            <MovieItem /> 
            <MovieItem />
            <MovieItem /> 
            <MovieItem /> 
            <MovieItem /> 
            <MovieItem /> 
        </Container>
    )
}

export default MoviesList;
