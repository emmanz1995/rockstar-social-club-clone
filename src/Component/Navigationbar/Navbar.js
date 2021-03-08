import React from "react";
import { Navigation } from "./style";

export default class Navbar extends React.Component {
    render() {
        return(
            <>
                <Navigation>
                    <ul>
                        <img src="./assets/sc-logo.jpg" height="50" alt="sc-logo"/>
                        <li><a style={{textDecoration: 'none', color: "white"}} href="#">Games</a></li>
                        <li><a style={{textDecoration: 'none', color: "white"}} href="#">Crews</a></li>
                        <li><a style={{textDecoration: 'none', color: "white"}} href="#">Jobs</a></li>
                        <li><a style={{textDecoration: 'none', color: "white"}} href="#">Photos</a></li>
                        <li><a style={{textDecoration: 'none', color: "white"}} href="#">Videos</a></li>
                        <li><a style={{textDecoration: 'none', color: "white"}} href="#">Events</a></li>
                        <li><a style={{textDecoration: 'none', color: "white"}} href="#">News</a></li>
                    </ul>
                    <div className="profile-min-section">
                        <button className="download-btn">Download Launcher</button>
                        <a className="bell-icon" href="#"><i className="far fa-bell" /></a>
                        <a href="#"><img className="img-profile" src="./assets/Josiah-Tralawny-icon.png" alt="profile-img" height="30"/></a>
                    </div>
                </Navigation>
            </>
        );
    }
}
