export const UPDATE_THEME = 'UPDATE_THEME';

// State Types
export interface themeState {
    title: string,
    colors: {
        primary:        string,
        secondary:      string,
        background:     string,
        dark:           string,
        white:          string,
    }
}

// Action Types
interface initialThemeAction { 
    type: typeof UPDATE_THEME,
    payload: themeState,
}

export type themeActionsTypes = initialThemeAction;