import React, { createContext, useState } from 'react';

// Types
export type appCtxStateType = {
    sidebarOpen: boolean,
};

const appCtxDefaultType = {
    appDataState: {
        sidebarOpen: false, 
    },
    setAppDataState: (appDataState: appCtxStateType) => {},
};

export type appProviderProps = {
    children: React.ReactNode,
};


export const AppContext = createContext(appCtxDefaultType);

export const AppProvider = ({ children }: appProviderProps) => {

    const [appDataState, setAppDataState] = useState(appCtxDefaultType.appDataState);

    return (
        <AppContext.Provider value={{
            appDataState,
            setAppDataState
        }}>
            { children }
        </AppContext.Provider>
    );
};