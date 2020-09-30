import styled from 'styled-components';
import { theme } from '../../styles/theme/theme';
import { mq } from '../../styles/breakpoints';

const { colors, font, margin, spacing, width } = theme;
console.log( mq )

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

    ${ mq[3] } {
        .container {
            margin: ${ margin.mAuto };
            max-width: ${ width.maxWidthLg }
            width: 100%;
        }
    }
`