import styled from 'styled-components';
import { mq } from '../styles/breakpoints';

export const HomeWrapper = styled.main`
    ${ mq[3] } { 
        padding-left: 300px;
        
        .container {
            margin: 0 auto 0 0;
            width: 90%;
        }
    };
`;