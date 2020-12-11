import React from "react";
import Navbar from "../Navigationbar/Navbar";
import {
    CompareStats, FriendNotification,
    ProfileSection,
    RecentActivitySection,
    SimpleNav, SnapmaticPhotos, StyledButton,
} from "../ActivityFeed/styleFeed";
import { GamesWallSection, GameWrapper, GameCard } from "./GamesStyles";
import Card from "react-bootstrap/Card";

const GamesTab = () => {
    return(
        <div>
            <Navbar />
            <div className="col-md-12" style={{backgroundColor: '#fcaf17'}}>
                <ProfileSection>
                    <div className="profile-img">
                        <img src="./assets/Josiah-Tralawny-icon.png" alt="Profile img" height="100"/>
                    </div>
                    <div className="mini-profile">
                        <h3><b>emmanz95</b></h3>
                        <div style={{display: "flex"}}>
                            <a style={{marginRight: "5px"}} href="#"><i className="fab fa-playstation"/></a>
                            <p>emmanz95</p>
                        </div>
                    </div>
                    <div className="edit-btn">
                        <button className="edit">Edit</button>
                    </div>
                </ProfileSection>
                <SimpleNav>
                    <ul>
                        <li><a href="/feed">Wall</a></li>
                        <li><a href="/games">Games</a></li>
                        <li><a href="/friends">Friends</a></li>
                        <li><a href="#">Crews</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Photos</a></li>
                        <li><a href="#">Videos</a></li>
                    </ul>
                </SimpleNav>
                <br/>
            </div>
            <div className="col-md-12">
                <GameWrapper>
                    <GamesWallSection>
                        <h3 style={{ margin: '0 10px' }}>Your Games</h3>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <GameCard>
                                        <a href="#">
                                            <img src="assets/gtaiv.jpg" alt="GTA IV" height="450"/>
                                        </a>
                                        <div className="play-time">
                                            <a href="#"><i className="far fa-check-circle" /></a>
                                            <p>Last Played: 2 Weeks Ago</p>
                                        </div>
                                    </GameCard>
                                </div>
                                <div className="col-md-3">
                                    <GameCard>
                                        <a href="#">
                                            <img src="assets/rdr2.jpg" alt="Red Dead Redemption 2" height="450"/>
                                        </a>
                                        <div className="play-time">
                                            <a href="#"><i className="far fa-check-circle" /></a>
                                            <p>Last Played: 2 Weeks Ago</p>
                                        </div>
                                    </GameCard>
                                </div>
                                <div className="col-md-3">
                                    <GameCard>
                                        <a href="#">
                                            <img src="assets/bully.jpg" alt="Bully" height="450"/>
                                        </a>
                                        <div className="play-time">
                                            <a href="#"><i className="far fa-check-circle" /></a>
                                            <p>Last Played: 2 Weeks Ago</p>
                                        </div>
                                    </GameCard>
                                </div>
                                <div className="col-md-3">
                                    <GameCard>
                                        <a href="#">
                                            <img src="assets/gtav.jpg" alt="GTA V" height="450"/>
                                        </a>
                                        <div className="play-time">
                                            <a href="#"><i className="far fa-check-circle" /></a>
                                            <p>Last Played: 2 Weeks Ago</p>
                                        </div>
                                    </GameCard>
                                </div>
                                <br/>
                                <div className="col-md-3">
                                    <GameCard>
                                        <a href="#">
                                            <img src="assets/lan.jpg" alt="La Noire" height="450"/>
                                        </a>
                                        <div className="play-time">
                                            <a href="#"><i className="far fa-check-circle" /></a>
                                            <p>Last Played: 2 Weeks Ago</p>
                                        </div>
                                    </GameCard>
                                </div>
                                <div className="col-md-3">
                                    <GameCard>
                                        <a href="#">
                                            <img src="assets/gtaiv_tlad.jpg" alt="GTA IV TLAD" height="450"/>
                                        </a>
                                        <div className="play-time">
                                            <a href="#"><i className="far fa-check-circle" /></a>
                                            <p>Last Played: 2 Weeks Ago</p>
                                        </div>
                                    </GameCard>
                                </div>
                                <div className="col-md-3">
                                    <GameCard>
                                        <a href="#">
                                            <img src="assets/gtaiv_tbogt.jpg" alt="GTA IV TBOGT" height="450"/>
                                        </a>
                                        <div className="play-time">
                                            <a href="#"><i className="far fa-check-circle" /></a>
                                            <p>Last Played: 2 Weeks Ago</p>
                                        </div>
                                    </GameCard>
                                </div>
                            </div>
                        </div>
                    </GamesWallSection>
                </GameWrapper>
            </div>
        </div>
    )
}

export default GamesTab;
