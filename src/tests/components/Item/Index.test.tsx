import React from 'react';
import { render } from '@testing-library/react';

import MovieItem from '../../../components/Item/index';
import { CardMedia } from '../../../components/Item/styled';

describe('Pruebas en componente <Item />', () => {

    const movie = {
        backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
        genre_ids: ["Fantasy","Action","Adventure"], 
        id: 464052,
        overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
        poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        title: "Wonder Woman 1984",
        vote_average: 7.2
    }
    
    test('<Item /> debe renderizar correctamente', () => {
        const { container } = render( <MovieItem movie={ movie } /> );

        expect(container).toMatchSnapshot();
    });

    test('Title debe renderizar en tag <p>', () => {
        const { getByText } = render( <MovieItem movie={ movie } /> );

        const movieTitle = getByText(movie.title);

        expect( movieTitle ).toBeDefined();
        expect( movieTitle.tagName.toLowerCase() ).toBe('p');
    });
    
    test('Vote_average debe renderizar en tag <span>', () => {
        const { getByText } = render( <MovieItem movie={ movie } /> );

        const voteAverage = getByText(movie.vote_average);

        expect( voteAverage ).toBeDefined();
        expect( voteAverage.tagName.toLowerCase() ).toBe('span');
    });
    
    test('La prop imgSource de CardMedia debe ser imageUrlBase + poster_path', () => {
        const { getByRole } = render( <MovieItem movie={ movie } /> );

        const imageUrlBase = new RegExp('https://image.tmdb.org/t/p/original');
        const CardMedia_styled = getByRole( 'img' );

        expect( CardMedia_styled ).toHaveStyleRule('background-image', imageUrlBase);
    });

});