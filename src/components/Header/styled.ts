import styled from 'styled-components';
import { theme } from '../../styles/theme/theme';
import { mq } from '../../styles/breakpoints';

const { colors, font, spacing } = theme;

export const HeaderWrapper = styled.header`
    background-color: ${ colors.dark };
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 ${ spacing.paddingBase };
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 150;

    h1 {
        font-size: ${ font.size.h1 };
    }
`;

export const MenuIcon = styled.div`
    
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    transition: all .2s ease-in-out;
    width: 3rem;

    &:hover {
        background-color: ${ colors.primary };
        transition: all .1s ease-out;
    }

    &:active {
        background-color: ${ colors.dark };
        transition: all .1s ease-out;
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${ mq[4] } {
        display: none;
    }
`;