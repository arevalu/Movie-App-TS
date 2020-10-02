import React from 'react';

import { URL_IMAGE_POSTER } from '../../utils/const';
import { popularMovie } from '../../types/movies';
 
import { Card, CardMedia, CardTitle, VoteAverage } from './styled';

type ItemProps = {
    movie: popularMovie;
}

const MovieItem: React.FC<ItemProps> = ({ movie }) => {

    const { poster_path, title, vote_average } = movie;

    return (
        <Card>
            <VoteAverage>
                <span>{ vote_average }</span>
            </VoteAverage>
            <CardMedia 
                imgSource={ `${ URL_IMAGE_POSTER }${ poster_path }` }
            />
            <CardTitle>
                <p>{ title }</p>
            </CardTitle>
        </Card>
    )
}

export default MovieItem;
