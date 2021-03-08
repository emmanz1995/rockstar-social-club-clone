import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const GamesWallSection = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    .play-time {
        display: flex;
        justify-content: space-between;
    }
  .game-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
  }
`;

export const GameWrapper = styled.div`
    padding: 0 1.25rem 1.25rem;
    box-shadow: 2px 2px 4px #888888;
    background-color: lightgrey;
    margin: 0 auto;
    max-width: 1420px;
`;

export const GameCard = styled(Card)`
  .game-img {
    width: 100%;
    height: auto;
  }
    img{
        margin: 0px;
    }
`;
