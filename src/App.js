import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./Component/Signin/signin";
import Feed from "./Component/ActivityFeed/feed";
import GamesTab from "./Component/GamesList/GamesTab";
import FriendsTab from "./Component/FriendsList/FriendsTab"
import { history } from "./Component/historyUtil";

class App extends React.Component {
  render() {
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
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
