import styled from 'styled-components';
import { theme } from '../../styles/theme/theme';
import { mq } from '../../styles/breakpoints';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${ mq[1] } {
        justify-content: space-evenly;
    }

    ${ mq[3] } {
        justify-content: space-between;
    }
`