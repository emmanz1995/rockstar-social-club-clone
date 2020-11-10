import React from "react";
import { SigninContainer } from './style';
import { history } from "../historyUtil";

export default class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault()
        history.push("/feed");
    }

    onChange(evt) {
        this.setState({[evt.target.name]:evt.target.value})
    }

    render() {
        return(
            <>
                <SigninContainer>
                    <div className="signin-section" style={{backgroundColor: "white"}}>
                        <h2>Sign in with Social Club</h2>
                        <input type="text" name="username" onChange={this.onChange} placeholder="Email"/>
                        <input type="password" name="password" onChange={this.onChange} placeholder="Password"/>
                        <div className="flex-input">
                            <input type="checkbox" id="ckb-keep" name="keep-me" value="Keep"/>
                            <p className="text">Keep me Signed in</p>
                        </div>
                        <div className="forgot-password-section">
                            <p><a className="forgot-link" href="#">Forgot Password</a></p>
                            <button className="btn-signin" onClick={this.handleSubmit}><b>Sign in</b></button>
                        </div>
                    </div>
                    <div className="social-media-section" style={{backgroundColor: "white"}}>
                        <h5>Sign in using</h5>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-playstation" /></a>
                            <a href="#"><i className="fab fa-xbox" /></a>
                            <a href="#"><i className="fab fa-facebook" /></a>
                            <a href="#"><i className="fab fa-google" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                        </div>
                    </div>
                </SigninContainer>
            </>
        );
    }
}
