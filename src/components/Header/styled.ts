import styled from 'styled-components';
import { theme } from '../../styles/theme/theme';

const { colors, font, spacing } = theme;

export const HeaderWrapper = styled.header`
    background-color: ${ colors.dark };
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 ${ spacing.paddingBase };
    width: 100%;

    h1 {
        font-size: ${ font.size.h1 };
    }
`