import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import { genres } from '../../utils/getGenres';

import { SidebarWrapper } from './styled';

const Sidebar: React.FC = () => {

    const { appDataState } = useContext( AppContext );

    const { sidebarOpen } = appDataState;

    const randomGenres = genres.sort( () => Math.random() - 0.5 ).slice(0, 8);

    return (
        <SidebarWrapper className={ sidebarOpen && 'display' }>
            <div>
                { randomGenres.map( ({id, name}) => <p key={ id }>{ name }</p> )}
            </div>
        </SidebarWrapper>
    )
}

export default Sidebar;
