import React from 'react';
import { shallow } from 'enzyme';

import MovieItem from '../../../components/MovieItem/index';
import { CardMedia } from '../../../components/MovieItem/styled';

describe('Pruebas en componente <Item />', () => {

    const movie = {
        backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
        genre_ids: ["Fantasy", "Action", "Adventure"],
        id: 464052,
        overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
        poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        title: "Wonder Woman 1984",
        vote_average: 7.2
    }

    const wrapper = shallow(<MovieItem movie={movie} />);

    test('<MovieItem /> debe renderizar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Title debe renderizar en tag <p>', () => {
        const p = wrapper.find("p").text();
        expect(p).toBe(movie.title);
    });

    test('Vote_average debe renderizar en tag <span>', () => {
        const voteAverage = wrapper.find("span").text();
        expect(Number(voteAverage)).toBe(movie.vote_average);
    });

    test('La prop imgSource de CardMedia debe ser imageUrlBase + poster_path', () => {
        const imageUrlBase = 'https://image.tmdb.org/t/p/original';
        const CardMedia_styled = wrapper.find(CardMedia).props();

        expect(CardMedia_styled.imgSource).toBe(`${imageUrlBase}${movie.poster_path}`);
    });

});