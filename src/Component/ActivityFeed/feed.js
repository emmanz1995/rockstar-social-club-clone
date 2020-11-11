import React from "react";
import Navbar from "../Navigationbar/Navbar";
import { ProfileSection, SimpleNav, RecentActivitySection, WallActivitySection, FriendNotification } from './styleFeed';
import Card from "react-bootstrap/Card";

export default class Feed extends React.Component {
    render() {
        return(
            <>
                <Navbar/>
                <div className="col-md-12" style={{backgroundColor: '#fcaf17'}}>
                    <ProfileSection>
                        <div className="profile-img">
                            <img src="./assets/Josiah-Tralawny-icon.png" alt="Profile img" height="100" />
                        </div>
                        <div className="mini-profile">
                            <h3><b>emmanz95</b></h3>
                            <div style={{display: "flex"}}>
                                <a style={{marginRight: "5px"}} href="#"><i className="fab fa-playstation" /></a>
                                <p>emmanz95</p>
                            </div>

                        </div>
                        <div className="edit-btn">
                            <button className="edit">Edit</button>
                        </div>
                    </ProfileSection>
                    <SimpleNav>
                        <ul>
                            <li><a href="#">Wall</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Friends</a></li>
                            <li><a href="#">Crews</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Photos</a></li>
                            <li><a href="#">Videos</a></li>
                        </ul>
                    </SimpleNav>
                    <RecentActivitySection>
                        <h4 className="activity-title">Recent Activity</h4>
                        <a className="filter" href="#">Filter{' '}<i className="fas fa-sort-amount-down" /></a>
                    </RecentActivitySection>
                    <br/>
                </div>
                <div className="col-md-12" style={{position: "absolute", top: "310px"}}>
                    <div className="row">
                        <div className="col-md-4">
                            {/*<WallActivitySection>*/}
                                <WallActivitySection body className="activity-card">
                                    <img className="img-card" src="./assets/Josiah-Tralawny-icon.png" alt="Profile" height="30"/>
                                    <textarea type="text" maxlength="200" height="52" placeholder="What's up, emmanz95?"></textarea>
                                    <div className="text-btn">
                                        <p>Post a message to your wall</p>
                                        <button className="btn-post">Post</button>
                                    </div>
                                </WallActivitySection>
                            {/*</WallActivitySection>*/}
                        </div>
                        <div className="col-md-4">
                            <FriendNotification body className="activity-card">
                                {/*<img className="img-card" src="./assets/Josiah-Tralawny-icon.png" alt="Profile"*/}
                                {/*     height="30"/>*/}
                                {/*<div className="text-btn">*/}
                                {/*    <p></p>*/}
                                {/*    <button className="btn-post">Post</button>*/}
                                {/*</div>*/}
                            </FriendNotification>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}