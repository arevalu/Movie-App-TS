import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary:        string;
            secondary:      string;
            background:     string;
            dark:           string;
            white:          string;
        }
    }
}