import styled from 'styled-components';
import { theme } from '../../styles/theme/theme';

const { colors } = theme;

type SidebarType = {
    className: any;
}

export const SidebarWrapper = styled.div<SidebarType>`
    background-color: ${ colors.dark };
    box-shadow: -5px 0px 15px 0px rgba(${ colors.rgba.dark },0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    position: fixed;
    top: 80px;
    right: 0;
    transform: translateX(100%);
    transition: all .2s ease-out;
    width: 90%;
    z-index: 100;

    &.display {
     transform: translateX(0);
     transition: all .2s ease-in;
    }

    div p{
        cursor: pointer;
        margin-bottom: 15px;
        text-align: center;
    }
`;