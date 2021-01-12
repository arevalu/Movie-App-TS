import React, { useContext } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { AppContext } from '../../context/AppContext';
import { HeaderWrapper, MenuIcon } from './styled';

const Header: React.FC = () => {

    const { appDataState, setAppDataState } = useContext( AppContext );

    const { sidebarOpen } = appDataState;
    
    const toggleSidebar = () => {
        setAppDataState({
            sidebarOpen: !sidebarOpen
        })
    };

    return (
        <HeaderWrapper>
            <div className="container">
                <h1>Movie App</h1>
            </div>
            <MenuIcon onClick={ toggleSidebar }>
                { sidebarOpen ? <HiX /> : <HiMenuAlt3 /> }
            </MenuIcon>
        </HeaderWrapper>
    )
}

export default Header
