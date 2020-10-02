import React from 'react';

import { HeaderWrapper } from './styled';

const Header: React.FC = () => {

    return (
        <HeaderWrapper>
            <div className="container">
                <h1>Movie App</h1>
            </div>
        </HeaderWrapper>
    )
}

export default Header
