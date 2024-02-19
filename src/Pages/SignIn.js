import Logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
    const GoToCreateAccount = () => {
        navigate("/");
    }

    const GoToForgotPassword = () => {
        navigate("/ForgotPassword");
    }

    const GoToDashBoard = () => {
        navigate("/DashBoard");
    }
    return (
        <>
            <div id="Elilipse"></div>
            <div id="ModalBody">
                <div id="LOGO">
                    <img alt="" src={Logo} />
                </div>
                <div id="ModalCont2">
                    <div id="HeaderTexts">
                        <p id="HeaderText">Sign into your Account</p>
                        <p id="SecondHeaderText">securely sign into your Veegil</p>
                    </div>
                    <form>
                        <div id="SixthInput">
                            <label id="EmailOrPhoneNolabel">Email or Phone Number</label>
                            <div id="EMAILORPHONENO">
                                <input name="emailorphoneno" id="Emailorphoneno" type="text" required placeholder="Email or Phone Number" />
                            </div>
                        </div>

                        <div id="SeventhInput">
                            <label id="seventhpasswordlabel">Password</label>
                            <div id="SEVENTHPASSWORD">
                                <input name="seventhpassword" id="SeventhPassword" type="password" required placeholder="Password" />
                            </div>
                        </div>

                        <div id="SIGNINBUTTON">
                            <input id="SignInButton" type="submit" value="Sign in"   onClick={GoToDashBoard}/>
                        </div>
                    </form>
                </div>
                <p id="Register">Don't have an account? <span id="RegisterLink" onClick={GoToCreateAccount}>Register</span></p>
                <p id="ForgotPSWLink" onClick={GoToForgotPassword}>Forgot Password?</p>
            </div>
            <div id="Elilipse2"></div>
        </>
    )
}