import Logo from '../images/20230918_124305 1.png';
import DashboardImg from '../images/Data Treemap.png';
import DashboardImg2 from '../images/Data Treemap2.png';
import TransactionImg from '../images/Page-2.png';
import TransactionImg2 from '../images/Page-1.png';
import CurrencyImg from '../images/fluent_convert-range-24-filled.png';
import CurrencyImg2 from '../images/fluent_convert-range-24-filled2.png';
import AnalyticsImg from '../images/Chart Multiple.png';
// import SecurityImg from '../images/Shield Keyhole.png';
import AccountImg from '../images/People.png';
import AccountImg2 from '../images/People2.png';
// import SupportImg from '../images/Vector.png';
// import SettingsImg from '../images/Settings.png';
import LogOutImg from '../images/Arrow Exit.png';

import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const navigate = useNavigate();
    const GoToSignIn = () => {
        navigate("/SignIn");
    }

    const GoToDashBoard = () => {
        document.getElementById("DashBoardCon").style.background = "#fff";
        document.getElementById("DashBoardCon").style.color = "#252424";
        document.getElementById("TransactionCon").style.background = "none";
        document.getElementById("TransactionCon").style.color = "#fff";
        document.getElementById("CurrencyCon").style.background = "none";
        document.getElementById("CurrencyCon").style.color = "#fff";
        document.getElementById("AccountCon").style.background = "none";
        document.getElementById("AccountCon").style.color = "#fff";
        document.querySelector(".DashBoardImgClass2").style.display = "none";
        document.querySelector(".DashBoardImgClass").style.display = "block";
        document.querySelector(".TransactionImgClass").style.display = "block";
        document.querySelector(".TransactionImgClass2").style.display = "none";
        document.querySelector(".CurrencyImgClass").style.display = "block";
        document.querySelector(".CurrencyImgClass2").style.display = "none";
        document.querySelector(".AccountImgClass").style.display = "block";
        document.querySelector(".AccountImgClass2").style.display = "none";
        navigate("/DashBoard/");
    }

    const GoToTransaction = () => {
        document.getElementById("DashBoardCon").style.background = "none";
        document.getElementById("DashBoardCon").style.color = "#fff";
        document.getElementById("TransactionCon").style.background = "#fff";
        document.getElementById("TransactionCon").style.color = "#252424";
        document.getElementById("CurrencyCon").style.background = "none";
        document.getElementById("CurrencyCon").style.color = "#fff";
        document.getElementById("AccountCon").style.background = "none";
        document.getElementById("AccountCon").style.color = "#fff";
        document.querySelector(".DashBoardImgClass2").style.display = "block";
        document.querySelector(".DashBoardImgClass").style.display = "none";
        document.querySelector(".TransactionImgClass").style.display = "none";
        document.querySelector(".TransactionImgClass2").style.display = "block";
        document.querySelector(".CurrencyImgClass").style.display = "block";
        document.querySelector(".CurrencyImgClass2").style.display = "none";
        document.querySelector(".AccountImgClass").style.display = "block";
        document.querySelector(".AccountImgClass2").style.display = "none";
        navigate("/DashBoard/TransactionPage");

    }

    const GoToSwapCurrency = () => {
        document.getElementById("DashBoardCon").style.background = "none";
        document.getElementById("DashBoardCon").style.color = "#fff";
        document.getElementById("TransactionCon").style.background = "none";
        document.getElementById("TransactionCon").style.color = "#fff";
        document.getElementById("CurrencyCon").style.background = "#fff";
        document.getElementById("CurrencyCon").style.color = "#252424";
        document.getElementById("AccountCon").style.background = "none";
        document.getElementById("AccountCon").style.color = "#fff";
        document.querySelector(".DashBoardImgClass2").style.display = "block";
        document.querySelector(".DashBoardImgClass").style.display = "none";
        document.querySelector(".TransactionImgClass").style.display = "block";
        document.querySelector(".TransactionImgClass2").style.display = "none";
        document.querySelector(".CurrencyImgClass").style.display = "none";
        document.querySelector(".CurrencyImgClass2").style.display = "block";
        document.querySelector(".AccountImgClass").style.display = "block";
        document.querySelector(".AccountImgClass2").style.display = "none";
        navigate("/DashBoard/SwapCurrencyPage");
    }


    const GoToAccount = () => {
        document.getElementById("DashBoardCon").style.background = "none";
        document.getElementById("DashBoardCon").style.color = "#fff";
        document.getElementById("TransactionCon").style.background = "none";
        document.getElementById("TransactionCon").style.color = "#fff";
        document.getElementById("CurrencyCon").style.background = "none";
        document.getElementById("CurrencyCon").style.color = "#fff";
        document.getElementById("AccountCon").style.background = "#fff";
        document.getElementById("AccountCon").style.color = "#252424";
        document.querySelector(".DashBoardImgClass2").style.display = "block";
        document.querySelector(".DashBoardImgClass").style.display = "none";
        document.querySelector(".TransactionImgClass").style.display = "block";
        document.querySelector(".TransactionImgClass2").style.display = "none";
        document.querySelector(".CurrencyImgClass").style.display = "block";
        document.querySelector(".CurrencyImgClass2").style.display = "none";
        document.querySelector(".AccountImgClass").style.display = "none";
        document.querySelector(".AccountImgClass2").style.display = "block";
        navigate("/DashBoard/AccountPage");
    }
    return (
        <>
            <div id="FixedBar">
                <div id="DashSideBar">
                    <div id="Sec1">
                        <img id="LOGOImg" alt='LOGO' src={Logo} />
                    </div>
                    <div id="Sec2">
                        <div id="DashBoardCon" onClick={GoToDashBoard}><img alt='DashBoardImg' id="DashBoardImg" className="DashBoardImgClass" src={DashboardImg} /><img alt='DashBoardImg' id="DashBoardImg" className="DashBoardImgClass2" src={DashboardImg2} /><span>Dashboard</span></div>
                        <div id="TransactionCon" onClick={GoToTransaction}><img alt='TransactionImg' id="TransactionImg" className="TransactionImgClass" src={TransactionImg} /><img alt='TransactionImg' id="TransactionImg" className="TransactionImgClass2" src={TransactionImg2} /><span>Transactions</span></div>
                        <div id="CurrencyCon" onClick={GoToSwapCurrency}><img alt='CurrencyImg' id="CurrencyImg" className="CurrencyImgClass" src={CurrencyImg} /><img alt='CurrencyImg' id="CurrencyImg" className="CurrencyImgClass2" src={CurrencyImg2} /><span>Swap Currency</span></div>
                        <div id="AnalyticsCon"><img alt='AnalyticsImg' id="AnalyticsImg" src={AnalyticsImg} /><span>Analytics </span></div>
                        {/* <div id="SecurityCon"><img alt='SecurityImg' id="SecurityImg" src={SecurityImg} /><span>Security</span></div> */}
                        <div id="AccountCon" onClick={GoToAccount}><img alt='AccountImg' id="AccountImg" className="AccountImgClass" src={AccountImg} /><img alt='AccountImg' id="AccountImg" className="AccountImgClass2" src={AccountImg2} /><span>Account</span></div>
                        {/* <div id="SupportCon"><img alt='SupportImg' id="SupportImg" src={SupportImg} /><span>Support</span></div> */}
                    </div>

                    <div id="Sec3">
                        {/* <div id="SettingsCon"><img alt='SettingsImg' id="SettingsImg" src={SettingsImg} /><span>Settings</span></div> */}
                        <div id="LogOutCon" onClick={GoToSignIn}><img alt='LogOutImg' id="LogOutImg" src={LogOutImg} /><span>Log out</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}