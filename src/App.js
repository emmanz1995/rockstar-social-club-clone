import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Signin from "./Component/Signin/signin";
import Feed from "./Component/ActivityFeed/feed";
import GamesTab from "./Component/GamesList/GamesTab";
import FriendsTab from "./Component/FriendsList/FriendsTab";
import Home from "./Component/Home/Home";

function App() {
    const history = useHistory();
    return (
        <div>
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
    );
}

export default App;
