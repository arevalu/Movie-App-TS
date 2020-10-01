import React from 'react';

import { URL_IMAGE_POSTER } from '../../utils/const';

import { Card, CardMedia, CardTitle, VoteAverage } from './styled';

const MovieItem: React.FC = () => {
    return (
        <Card>
            <VoteAverage>
                <span>7.6</span>
            </VoteAverage>
            <CardMedia 
                imgSource={ `${ URL_IMAGE_POSTER }/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg` }
            />
            <CardTitle>
                <p>Thor: Ragnarok</p>
            </CardTitle>
        </Card>
    )
}

export default MovieItem;
