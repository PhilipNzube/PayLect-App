import Logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {
    const navigate = useNavigate();
    const GoToSignIn = () => {
        navigate("/SignIn");
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
                <div id="ModalCont">
                    <div id="HeaderTexts">
                        <p id="HeaderText">Create a Secure Account</p>
                        <p id="SecondHeaderText">Welcome to the future of Savings & Investments</p>
                    </div>
                    <form>
                        <div id="FirstInput">
                            <label id="fullnamelabel">Full name</label>
                            <div id="FULLNAME">
                                <input name="fullname" id="Fullname" type="text" required placeholder="Full name" />
                            </div>
                        </div>

                        <div id="SecondInput">
                            <label id="emaillabel">Email Address</label>
                            <div id="EMAIL">
                                <input name="email" id="Email" type="email" required placeholder="Email Address" />
                            </div>
                        </div>

                        <div id="ThirdInput">
                            <label id="phonelabel">Phone Number</label>
                            <div id="PHONENUMBER">
                                <input name="phoneno" id="Phoneno" type="text" required placeholder="Phone Number" />
                            </div>
                        </div>

                        <div id="FourthInput">
                            <label id="passwordlabel">Password</label>
                            <div id="PASSWORD">
                                <input name="password" id="Password" type="password" required placeholder="Password" />
                            </div>
                        </div>

                        <div id="FifthInput">
                            <label id="referrernamelabel">Referrer code (Optional)</label>
                            <div id="REFERRER">
                                <input name="referrer" id="Referrer" type="text" placeholder="Referrer code (Optional)" />
                            </div>
                        </div>

                        <div id="CREATEBUTTON">
                            <input id="CreateButton" type="submit" value="Create Account"  onClick={GoToDashBoard}/>
                        </div>
                    </form>
                </div>
                <p id="SignIn">Already have an account? <span id="SignInLink" onClick={GoToSignIn}>Sign in</span></p>
            </div>
            <div id="Elilipse2"></div>
        </>
    )
}