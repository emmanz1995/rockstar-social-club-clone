import React from "react";
import Navbar from "../Navigationbar/Navbar";
import { ProfileSection, SimpleNav, RecentActivitySection, WallActivitySection, FriendNotification, CompareStats, SnapmaticPhotos, StyledButton } from './styleFeed';
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
                            <WallActivitySection body className="activity-card">
                                <img className="img-card" src="./assets/Josiah-Tralawny-icon.png" alt="Profile" height="30"/>
                                <textarea type="text" maxlength="200" height="52" placeholder="What's up, emmanz95?" />
                                <div className="text-btn">
                                    <p>Post a message to your wall</p>
                                    <button className="btn-post">Post</button>
                                </div>
                            </WallActivitySection>
                            <br/>
                            <CompareStats>
                                <Card.Body className="card-body-section" />
                                <Card.Footer>
                                    <p>There's nothing like having the hard evidence to back up your braggadocio. Keep a record of your criminal exploits with rich personal stats and leverage our extensive checklists to achieve that elusive 100% completion.</p>
                                    <StyledButton>Compare Stats</StyledButton>
                                </Card.Footer>
                            </CompareStats>
                        </div>
                        <div className="col-md-4">
                            <FriendNotification body className="activity-card">
                                <div className="main-img">
                                    <img className="img-card" src="./assets/Josiah-Tralawny-icon.png" alt="Profile" height="50"/>
                                    <div className="username-detail">
                                        <a href="#">emmanz95</a>
                                        <p>Became friends with <a href="#">Janis2295</a></p>
                                    </div>
                                    <div className="friends-icon">
                                        <i className="fas fa-user-friends" />
                                    </div>
                                </div>
                                <div className="request-tab">
                                    <img className="img-card" src="./assets/arthur-morgan-icon.png" alt="Profile" height="52" style={{marginRight: '15px'}}/>
                                    <a href="#">Janis2295</a>
                                </div>
                                <hr />
                                <div className="update-section">
                                    <div className="icon-section">
                                        <i className="far fa-star" />{' '}
                                        <i className="far fa-comment" />
                                    </div>
                                    <div className="options-section">
                                        <p>1 month ago</p>
                                    </div>
                                </div>
                            </FriendNotification>
                            <br/>
                            <SnapmaticPhotos>
                                <Card.Body className="card-body-section"/>
                                <Card.Footer>
                                    Discover photos taken and shared by emmanz95.
                                    <StyledButton>View Photos</StyledButton>
                                </Card.Footer>
                            </SnapmaticPhotos>
                        </div>
                        <div className="col-md-4">
                            <FriendNotification body className="activity-card">
                                <div className="main-img">
                                    <img className="img-card" src="./assets/Josiah-Tralawny-icon.png" alt="Profile" height="50"/>
                                    <div className="username-detail">
                                        <a href="#">emmanz95</a>
                                        <p>Became friends with <a href="#">Jasmine97</a></p>
                                    </div>
                                    <div className="friends-icon">
                                        <i className="fas fa-user-friends" />
                                    </div>
                                </div>
                                <div className="request-tab">
                                    <img className="img-card" src="./assets/hosea-matthews-icon.png" alt="Profile" height="52" style={{marginRight: '15px'}}/>
                                    <a href="#">Jasmine97</a>
                                </div>
                                <hr />
                                <div className="update-section">
                                    <div className="icon-section">
                                        <i className="far fa-star" />{' '}
                                        <i className="far fa-comment" />
                                    </div>
                                    <div className="options-section">
                                        <p>1 month ago</p>
                                    </div>
                                </div>
                            </FriendNotification>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
