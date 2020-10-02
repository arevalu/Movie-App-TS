import React from 'react';

import MoviesList from '../components/MoviesList';

const Home: React.FC = () => {

    return (
        <main>
            <div className="container">
                <MoviesList />
            </div>
        </main>
    )
}

export default Home;
