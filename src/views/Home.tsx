import React from 'react';

import List from '../components/List';
import { HomeWrapper } from './styled';

const Home: React.FC = () => {

    return (
        <HomeWrapper>
            <div className="container">
                <List />
            </div>
        </HomeWrapper>
    )
}

export default Home;
