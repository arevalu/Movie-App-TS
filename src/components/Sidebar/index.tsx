import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import { SidebarWrapper } from './styled';

const Sidebar: React.FC = () => {

    const { appDataState } = useContext(AppContext);

    const { sidebarOpen } = appDataState;

    return (
        <SidebarWrapper className={sidebarOpen && 'display'}>
            <div>

            </div>
        </SidebarWrapper>
    )
}

export default Sidebar;
