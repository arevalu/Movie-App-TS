import { themeState, UPDATE_THEME, themeActionsTypes } from '../types/themeTypes';

export function initialTheme( theme: themeState ): themeActionsTypes {
    return {
        type: UPDATE_THEME,
        payload: theme,
    }
}