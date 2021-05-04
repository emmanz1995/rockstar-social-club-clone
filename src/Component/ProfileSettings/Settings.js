import React from "react";
import Navbar from "../Navigationbar/Navbar";
import {
    SettingsContainer,
    CurrentUserContainer,
    AccountSettingsContainer
} from './SettingsStyles';
import { AuthService } from "../../Service/AuthService";

const Settings = () => {
    const currentUser = AuthService.getUserInfo();
    return(
        <div>
            <Navbar />
            <SettingsContainer>
                <h1>Settings</h1>
                <CurrentUserContainer>
                    <span>
                        <div>
                            <p>Full Name:</p><p>{currentUser.user.fullName}</p>
                        </div>
                        <a href="#">Edit</a>
                    </span>
                    <span>
                        <div>
                            <p>Nickname:</p><p>{currentUser.user.username}</p>
                        </div>
                        <a href="#">Edit</a>
                    </span>
                    <span>
                        <div>
                            <p>Email:</p><p>{currentUser.user.email}</p>
                        </div>
                        <a href="#">Edit</a>
                    </span>
                    {/*<span>*/}
                    {/*    <div>*/}
                    {/*        <p>Member Since:</p><p>{currentUser.user.createdAt}</p>*/}
                    {/*    </div>*/}
                    {/*    <a href="#">Edit</a>*/}
                    {/*</span>*/}
                </CurrentUserContainer>
                {/*<AccountSettingsContainer></AccountSettingsContainer>*/}
            </SettingsContainer>
        </div>
    );
}

export default Settings;
