import styled from 'styled-components';
import { theme } from '../../styles/theme/theme';
import { mq } from '../../styles/breakpoints';

const { colors, borderRadius, font, spacing } = theme;

type Card = {
    imgSource: string;
}

export const Card = styled.div`
    cursor: pointer;
    margin-bottom: ${ spacing.large };
    position: relative;
    width: 80%;

    ${ mq[1] } {
        width: 40%;
    }

    ${ mq[2] } {
        width: 30%;
    }

    ${ mq[3] } {
        width: 200px;
    }
`

export const VoteAverage = styled.div`
    background-color: ${ colors.secondary };
    border-radius: ${ borderRadius.sm };
    color: ${ colors.dark };
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 5%;
    width: 50px;
`

export const CardMedia = styled.div<Card>`
    background-image: url( "${ ({imgSource}) => imgSource}" );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: ${ borderRadius.lg };
    padding-bottom: 150%;
    width: 100%;

    ${ mq[3] } {
        border-radius: ${ borderRadius.md };
    }
`

export const CardTitle = styled.div`
    margin-top: 1.25rem;

    p {
        font-size: ${ font.size.h4 };
        font-weight: 600;
        padding-left: 10px;

        ${ mq[3] } {
            font-size: ${ font.size.base };
        }   
    }
`