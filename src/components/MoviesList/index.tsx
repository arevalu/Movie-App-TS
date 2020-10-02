import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MovieItem from '../MovieItem';
import { getPopular } from '../../services/getPopular';
import { updatePopularMovies } from '../../redux/actions/popularActions';
import { popularMovie, popularMovies } from '../../redux/types/popularTypes';

import { Container } from './styled';

const MoviesList = () => {

    const [movies, setMovies] = useState<popularMovies>();
    const dispatch = useDispatch();

    useEffect(() => {
        getPopular().then( (data: popularMovies) => setMovies( data ));
    }, [])

    useEffect(() => {
        console.log( movies )
    }, [movies])

    // dispatch( updatePopularMovies({
    //     poster_path: data.poster_path,
    //     id: 0,
    //     title: 'string',
    //     vote_average: 0,
    // })) )

    return (
        <Container>
            <MovieItem />
        </Container>
    )
}

export default MoviesList;
