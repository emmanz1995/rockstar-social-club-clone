import styled from 'styled-components';

const MainWrapper = styled.main`
  .friends-wrapper {
    max-width: 1420px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    position: relative;
    bottom: 40px;
    z-index: 1000;
    padding: 0 1.25rem 1.25rem;
    border-radius: 3px;
    box-shadow: ${props => props.theme.boxShadow};
  }
  .friends-card {
    padding: 10px 0;
  }
  .find-friends {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      border: 0;
      background-color: rgba(252, 175, 23);
      padding: 10px;
      border-radius: 4px;
    }
  }
  .search-friends {
    display: flex;
    padding: 10px 0;
  }
  .friends-searchbar {
    flex: 0 1 30%;
  }
  .dropdown-ui {
    padding: 0 1.25rem 0 0;
    select {
      width: 100%;
      height: 2.7rem;
    }
  }
  .search-input {
    flex: 0 1 70%;
    input {
      width: 100%;
      height: 2.7rem;
    }
  }
`

export {
    MainWrapper
}

// padding: 0 1.25rem 0 0;
