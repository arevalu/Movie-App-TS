import styled from 'styled-components';
import { mq } from '../../styles/breakpoints';


export const ListContainer = styled.div`
    padding-top: 50px;
`;
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 25px;

    ${mq[1]} {
        justify-content: space-evenly;
    }

    ${mq[3]} {
        justify-content: space-between;
    }
`;