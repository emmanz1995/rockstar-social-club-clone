import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const ProfileSection = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .profile-img {
        margin: 10px 0;
    }
    .mini-profile {
        margin: 0 10px;
        flex: 1;
    }
    .edit-btn {
        margin: 10px 0;
        .edit {
            background-color: rgba(26,26,26,.7);
            color: #fff;
            height: 35px;
            width: 70px;
            border: #fff solid 1px;
            border-radius: 4px;
            &:hover {
                background-color: #000;
            }
        }
    }
`;

export const SimpleNav = styled.div`
    background-color: #fff;
    border-radius: 4px;
    ul {
        display: flex;
    }
    li {
        margin: 15px;
        list-style: none;
    }
    a {
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: 700;
        &:hover {
            color: #fcaf17;
        }
    }
    @media screen and (max-width: 700px) {
        ul {
           flex-direction: column; 
           align-items: center;
           justify-content: center;
        }
        
    }
`;

export const RecentActivitySection = styled.div`
    display: flex;
    .activity-title {
        flex: 1;
    }
    .filter {
        font-weight: 700;
        font-size: 18px;
        text-decoration: none;
        color: white;
        &:hover {
            color: lightgrey;
        }
    }
`;

export const WallActivitySection = styled(Card)`
    display: flex;
    box-shadow: 2px 2px 4px #888888;
    textarea {
        width: 100%;
        border: 1px solid #f2f2f2;
        padding: 0 40px;
    }
    .img-card {
        position: absolute;
        top: 27px;
        left: 25px;
        border-radius: 50%;
    }
    .text-btn {
        display: flex;
        justify-content: space-between;
    }
    .btn-post {
        height: 35px;
        width: 50px;
        background: linear-gradient(90deg,#f7931e,#fcaf17);
        border: 1px solid #fcaf17;
        border-radius: 4px;
        &:hover {
            background-color: lightyellow;
        }
    }
`;

export const FriendNotification = styled(Card)`
    // padding: 65px;
    box-shadow: 2px 2px 4px #888888;
    .request-tab {
        display: flex;
        align-items: center;
        margin: 10px 0;
        border: 1px solid #e6e6e6;
        padding: 2px;
    }
    .main-img {
        display: flex;
    }
    .username-detail {
        margin: 0 5px;
        flex: 1;
    }
    .fa-user-friends {
        border-radius: 50%;
        border: 1px solid #e6e6e6;
        padding: 5px;
    }
    .update-section {
        display: flex;
    }
    .icon-section {
        flex: 1;
    }
`;

export const CompareStats = styled(Card)`
    .card-body-section {
        background-image: url(./assets/sc-card-stats.jpg);
        min-height: 357px;
    }
`;

export const SnapmaticPhotos = styled(Card)`
    .card-body-section {
        background-image: url(./assets/sc-card-snapmatic.jpg);
        min-height: 312px;
    }
`;

export const StyledButton = styled(Button)`
    background: linear-gradient(90deg,#f7931e,#fcaf17);
    border-color: #fcaf17;
    width: 100%;
`;
