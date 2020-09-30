import { themeState, themeActionsTypes, UPDATE_THEME } from '../types/themeTypes';

const initialState: themeState = {
    title: 'theme',
    colors: {
        primary:        '#1BB4AE',
        secondary:      '#E6C21F',
        background:     '#222B32',
        dark:           '#181C1F',
        white:          '#F5F5F5',
    }
}

export const themeReducer = ( 
    state = initialState, 
    action: themeActionsTypes ): themeState => {
        switch( action.type ) {
            case UPDATE_THEME :
                return {
                    ...state,
                    ...action.payload,
                }
            default:
                return state;
        } 
            
    }