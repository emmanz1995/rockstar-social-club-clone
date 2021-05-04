import React from "react";
import { SigninContainer } from './style';
import { useHistory } from 'react-router-dom';
import { AuthService } from "../../Service/AuthService";

const Signin = () => {
   const history = useHistory();
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   function handleSubmit(evt) {
        evt.preventDefault();
        let formData = {
            email: email,
            password: password
        }
        AuthService.onSignin(formData)
            .then(() => {
                history.push('/feed');
            })
            .catch(error => console.log(error));
    }
    return(
        <>
            <SigninContainer>
                <div className="signin-section" style={{backgroundColor: "white"}}>
                    <h2>Sign in with Social Club</h2>
                    <input type="text" name="email" value={email} onChange={(evt)=> setEmail(evt.target.value)} placeholder="Email"/>
                    <input type="password" name="password" value={password} onChange={(evt)=> setPassword(evt.target.value)} placeholder="Password"/>
                    <div className="flex-input">
                        <input type="checkbox" id="ckb-keep" name="keep-me" value="Keep"/>
                        <p className="text">Keep me Signed in</p>
                    </div>
                    <div className="forgot-password-section">
                        <p><a className="forgot-link" href="#">Forgot Password</a></p>
                        <button className="btn-signin" onClick={handleSubmit}><b>Sign in</b></button>
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
                <div>
                    <p>Not a member? <a href="#">Create a new account</a></p>
                </div>
            </SigninContainer>
        </>
    );
}

export default Signin;
