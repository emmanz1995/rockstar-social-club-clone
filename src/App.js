import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Signin from "./Component/Signin/signin";
import Feed from "./Component/ActivityFeed/feed";
import GamesTab from "./Component/GamesList/GamesTab";
import FriendsTab from "./Component/FriendsList/FriendsTab";
import Home from "./Component/Home/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./Config/theme";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: #f2f2f2;
  }
`

function App() {
    const history = useHistory();
    return (
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyles />
                <Router history={history}>
                    <Switch>
                        <Route exact path="/">
                            <Signin/>
                        </Route>
                        <Route path="/feed">
                            <Feed />
                        </Route>
                        <Route path="/friends">
                            <FriendsTab/>
                        </Route>
                        <Route path="/games">
                            <GamesTab/>
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>

    );
}

export default App;
