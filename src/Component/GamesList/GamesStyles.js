import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const GamesWallSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    .play-time {
        display: flex;
        justify-content: space-between;
    }
`;

export const GameWrapper = styled.div`
    padding: 0 1.25rem 1.25rem;
    box-shadow: 2px 2px 4px #888888;
    background-color: lightgrey;
`;

export const GameCard = styled(Card)`
    width: 365px;
    img{
        margin: 0px;
    }
`;
