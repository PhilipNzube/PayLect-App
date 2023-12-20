import Logo from './images/20230918_124305 1.png';
import DashboardImg from './images/Data Treemap.png';
import TransactionImg from './images/Approvals App.png';
import CurrencyImg from './images/fluent_convert-range-24-filled.png';
import AnalyticsImg from './images/Chart Multiple.png';
import SecurityImg from './images/Shield Keyhole.png';
import AccountImg from './images/People.png';
import SupportImg from './images/Vector.png';
import SettingsImg from './images/Settings.png';
import LogOutImg from './images/Arrow Exit.png';
import LeftArrowImg from './images/Chevron3.png';
import RightArrowImg from './images/Chevron.png';
import AlertImg from './images/Alert Badge.png';
import BadgeImg from './images/Ellipse 30.png';
import ProfileImg1 from './images/Rectangle 43.png';
import ProfileImg2 from './images/Chevron2.png';
import WalletImg from './images/Group 47697.png';
import BalanceImg from './images/Eye Off.png';
import TransferImg from './images/Group 1453.png';
import DepositImg from './images/Group 1452.png';
import AnalysisImg from './images/Chevron2.png';
import IncomeImg from './images/Card.png';
import RightImg from './images/Right-Arrow 2.png';
import TransacImg from './images/Ellipse 4.png';
import TransacImg2 from './images/uil_wallet.png';
import CardDesignImg from './images/Vector1.png';
import CardDesignImg2 from './images/Vector2.png';
import CardDesignImg3 from './images/Chevron.png';
import CardDesignImg4 from './images/Master card logo.png';
import LogoImg from './images/20230915_121515 1.png';
import ComingSoonImg from './images/Vector 3.png';
import PhoneImg from './images/Circles Onboarding mu 1.png';
import BellImg from './images/notification 3d 1.png';
import CloseImg from './images/password icons.png';
// import DropDownImg from './images/chevron-down.png';
import RadioBoxImg from './images/Component 2.png';
import RadioBoxImg2 from './images/Component 3.png';
import PlaneLinesImg from './images/Vector 4.png';
import PlaneImg from './images/Vector4.png';
import SandwichMenuImg from './images/Group 211.png';
import { useNavigate } from 'react-router-dom';

export default function DashBoard() {

    const navigate = useNavigate();
    const GoToSignIn = () => {
        navigate("/SignIn");
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 690) {
            document.getElementById("SideBarDeactivator").style.display = "none";
            document.getElementById("DashTopSubSec3").style.display = "none";
            document.getElementById("FixedBar").style.display = "block";
        }
        else if (window.innerWidth <= 690) {
            document.getElementById("SideBarDeactivator").style.display = "none";
            document.getElementById("DashTopSubSec3").style.display = "block";
            document.getElementById("FixedBar").style.display = "none";
        }

        if (window.innerHeight > 649) {
            document.getElementById("TransferPopUp").style.alignItems = "center";
            document.getElementById("TransferPopUp2").style.alignItems = "center";
        }
        else if (window.innerHeight <= 649) {
            document.getElementById("TransferPopUp").style.alignItems = "normal";
            document.getElementById("TransferPopUp2").style.alignItems = "normal";
        }
    });


    const CloseModal1 = () => {
        document.getElementById("ModalActivator").style.display = "none";
    }

    const CloseModal2 = () => {
        document.getElementById("ModalActivator2").style.display = "none";
        document.getElementById("ModalActivator").style.display = "block";
    }

    const CloseModal3 = () => {
        document.getElementById("ModalActivator3").style.display = "none";
        document.getElementById("ModalActivator2").style.display = "block";
    }


    const OpenModal1 = () => {
        document.getElementById("ModalActivator").style.display = "block";
    }

    const OpenModal2 = () => {
        document.getElementById("ModalActivator").style.display = "none";
        document.getElementById("ModalActivator2").style.display = "block";
    }

    const OpenModal3 = () => {
        document.getElementById("ModalActivator2").style.display = "none";
        document.getElementById("ModalActivator3").style.display = "block";
    }



    const OpenSideBar = () => {
        document.getElementById("SideBarDeactivator").style.display = "block";
        document.getElementById("FixedBar").style.display = "block";
    }


    const CloseSideBar = () => {
        document.getElementById("SideBarDeactivator").style.display = "none";
        document.getElementById("DashTopSubSec3").style.display = "block";
        document.getElementById("FixedBar").style.display = "none";
    }




    return (
        <>
            <div id="DashContainer">
                <div id="SideBarDeactivator" onClick={CloseSideBar}></div>
                <div id="ModalActivator">
                    <div id="TransferPopUp">
                        <div id="TransferModal">
                            <div id="TransferSec">
                                <span id="TransferText">Transfer</span>
                                <span><img alt='CloseImg' id="CloseImg" src={CloseImg} onClick={CloseModal1} /></span>
                            </div>

                            <div id="TransferSec2">
                                <span id="TransferText2">Select a destination</span>
                                <span id="TransferText3">Where do you want to withdraw your cash to?</span>
                            </div>

                            <div id="TransferSec6">
                                <span id="TransferText10">Transfer to User</span>
                                <span id="TransferText11">Send funds to other Users</span>
                            </div>

                            <div id="TransferSec3" onClick={OpenModal2}>
                                <span id="TransferText4">Withdraw to Bank</span>
                                <span id="TransferText5">Receive funds in seconds or minutes</span>
                            </div>

                            <div id="TransferSec4">
                                <span id="TransferText6">Transfer as Crypto Currency</span>
                                <span id="TransferText7">Send funds as Crypto Currency</span>
                            </div>
                            <span id="TransferText8">COMING SOON</span>


                            <div id="TransferSec5" onClick={CloseModal1}>
                                <span id="TransferText9">Cancel</span>
                            </div>

                        </div>
                    </div>
                </div>


                <div id="ModalActivator2">
                    <div id="TransferPopUp2">
                        <div id="TransferModal2">
                            <div id="Transfer2Sec">
                                <span id="Transfer2Text">Transfer to Bank</span>
                                <span><img alt='CloseImg' id="CloseImg" src={CloseImg} onClick={CloseModal2} /></span>
                            </div>

                            <div id="Transfer2Sec2">
                                <div id="Transfer2Sec2Sub">
                                    <span id="Transfer2Text2">Select Source Account</span>
                                    <div id="Transfer2Sec2SubSubParent">
                                        <select id="Transfer2Sec2SubSub">
                                            <option id="Transfer2Text3">Wallet</option>
                                        </select>
                                        {/* <span><img alt='DropDownImg' id="DropDownImg" src={DropDownImg} /></span> */}
                                    </div>
                                </div>

                                <div id="Transfer2Sec2Sub2Parent">
                                    <select id="Transfer2Sec2Sub2">
                                        <option id="Transfer2Text4">Select Bank</option>
                                    </select>
                                    {/* <span><img alt='DropDownImg' id="DropDownImg" src={DropDownImg} /></span> */}
                                </div>


                                <div id="Transfer2Sec2Sub3">
                                    <span id="Transfer2Text5">Amount</span>
                                    <div id="Transfer2Text6">
                                        <input id="Transfer2Sec2SubSub2" type="text" placeholder='0.00' />
                                    </div>
                                </div>

                                <div id="Transfer2Sec2Sub4">
                                    <span id="Transfer2Text7">Transaction Description</span>
                                    <div id="Transfer2Text8">
                                        <input id="Transfer2Sec2SubSub3" type="text" placeholder='Transaction Narration' />
                                    </div>
                                </div>
                            </div>

                            <div id="Transfer2Sec3">
                                <div id="Transfer2Sec2Sub5" onClick={CloseModal2}>
                                    <span id="Transfer2Text9">Cancel</span>
                                </div>

                                <div id="Transfer2Sec2Sub6" onClick={OpenModal3}>
                                    <span id="Transfer2Text10">Proceed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="ModalActivator3">
                    <div id="TransferPopUp3">
                        <span id="Scroller"></span>
                        <div id="TransferModal3">
                            <div id="Transfer2Sec">
                                <span id="Transfer2Text">Transfer to Bank</span>
                                <span><img alt='CloseImg' id="CloseImg" src={CloseImg} onClick={CloseModal3} /></span>
                            </div>

                            <div id="Transfer3Sec2">
                                <span id="Transfer3Text4">Select Source Account</span>
                                <div id="Transfer3Sec2SubSub3Parent">
                                    <select id="Transfer3Sec2SubSub3">
                                        <option id="Transfer3Text5">Wallet</option>
                                    </select>
                                    {/* <span><img alt='DropDownImg' id="DropDownImg" src={DropDownImg} /></span> */}
                                </div>
                            </div>


                            <div id="Transfer3Sec">
                                <div id="Transfer3Sec2Sub">
                                    <span id="Transfer3Text">Select a Bank </span>
                                    <div id="Transfer3Text2">
                                        <input id="Transfer3Sec2SubSub" type="text" placeholder='ACCESS BANK NIGERIA PLC' />
                                    </div>
                                </div>

                                <div id="Transfer3Sec2Sub2">
                                    <div id="Transfer3Sec2SubSub2">
                                        <span id="Transfer3Text3">9PAYMENT SERVICE BANK</span>
                                        <span><img alt='RadioBoxImg' id="RadioBoxImg" src={RadioBoxImg} /></span>
                                    </div>
                                    <div id="Transfer3Sec2SubSub2">
                                        <span id="Transfer3Text3">AB MICROFINANCE BANK</span>
                                        <span><img alt='RadioBoxImg' id="RadioBoxImg" src={RadioBoxImg} /></span>
                                    </div>
                                    <div id="Transfer3Sec2SubSub2">
                                        <span id="Transfer3Text3">ABBEY MORTGAGE BANK</span>
                                        <span><img alt='RadioBoxImg' id="RadioBoxImg" src={RadioBoxImg} /></span>
                                    </div>
                                    <div id="Transfer3Sec2SubSub2">
                                        <span id="Transfer3Text3">ACCESS BANK NIGERIA PLC</span>
                                        <span><img alt='RadioBoxImg2' id="RadioBoxImg2" src={RadioBoxImg2} /></span>
                                    </div>
                                    <div id="Transfer3Sec2SubSub2">
                                        <span id="Transfer3Text3">FIRSTBANK  NIGERIA</span>
                                        <span><img alt='RadioBoxImg' id="RadioBoxImg" src={RadioBoxImg} /></span>
                                    </div>

                                </div>



                                <div id="Transfer3Sec2Sub3">
                                    <span id="Transfer3Text6">Account Number </span>
                                    <input id="Transfer3Sec2SubSub4" type="text" />
                                    <span id="Transfer3Text7">ACCOUNT HOLDER’S NAME</span>
                                </div>


                                <div id="Transfer3Sec2Sub4">
                                    <span id="Transfer3Text8">Amount <span id="NGN">NGN</span> </span>
                                    <div id="Transfer3Text9">
                                        <input id="Transfer3Sec2SubSub5" type="text" placeholder='0.00' />
                                    </div>
                                </div>

                                <div id="Transfer3Sec2Sub5">
                                    <span id="Transfer3Text10">Transaction summary </span>
                                    <div id="Transfer3Text11">
                                        <input id="Transfer3Sec2SubSub6" type="text" placeholder='Transaction Narration' />
                                    </div>
                                </div>

                                <div id="Transfer3Sec2Sub6">
                                    <span id="Transfer3Text12">Proceed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="FixedBar">
                    <div id="DashSideBar">
                        <div id="Sec1">
                            <img id="LOGOImg" alt='LOGO' src={Logo} />
                        </div>
                        <div id="Sec2">
                            <div id="DashBoardCon"><img alt='DashBoardImg' id="DashBoardImg" src={DashboardImg} /><span>Dashboard</span></div>
                            <div id="TransactionCon"><img alt='TransactionImg' id="TransactionImg" src={TransactionImg} /><span>Transactions</span></div>
                            <div id="CurrencyCon"><img alt='CurrencyImg' id="CurrencyImg" src={CurrencyImg} /><span>Swap Currency</span></div>
                            <div id="AnalyticsCon"><img alt='AnalyticsImg' id="AnalyticsImg" src={AnalyticsImg} /><span>Analytics </span></div>
                            <div id="SecurityCon"><img alt='SecurityImg' id="SecurityImg" src={SecurityImg} /><span>Security</span></div>
                            <div id="AccountCon"><img alt='AccountImg' id="AccountImg" src={AccountImg} /><span>Account</span></div>
                            <div id="SupportCon"><img alt='SupportImg' id="SupportImg" src={SupportImg} /><span>Support</span></div>
                        </div>

                        <div id="Sec3">
                            <div id="SettingsCon"><img alt='SettingsImg' id="SettingsImg" src={SettingsImg} /><span>Settings</span></div>
                            <div id="LogOutCon" onClick={GoToSignIn}><img alt='LogOutImg' id="LogOutImg" src={LogOutImg} /><span>Log out</span></div>
                        </div>
                    </div>
                </div>
                <div id="DashMain">
                    <div id="DashTopSec">
                        <div id="DashTopSubSec3">
                            <span><img alt='SandwichMenuImg' id="SandwichMenuImg" src={SandwichMenuImg} onClick={OpenSideBar} /></span>
                        </div>

                        <div id="DashTopSubSec">
                            <span><img alt='LeftArrowImg' id="LeftArrowImg" src={LeftArrowImg} /></span>
                            <span><img alt='RightArrowImg' id="RightArrowImg" src={RightArrowImg} /></span>
                        </div>
                        <div id="DashTopSubSec2">
                            <div id="Notification">
                                <span><img alt='AlertImg' id="AlertImg" src={AlertImg} /></span>
                                <span><img alt='BadgeImg' id="BadgeImg" src={BadgeImg} /></span>
                            </div>
                            <div id="Profile">
                                <span><img alt='ProfileImg1' id="ProfileImg1" src={ProfileImg1} /></span>
                                <span><img alt='ProfileImg2' id="ProfileImg2" src={ProfileImg2} /></span>
                            </div>
                        </div>

                    </div>

                    <div id="MainSec">
                        <div id="Card1">
                            <div id="C1Cont">
                                <span id="WalletText">Wallet Balance</span>
                                <span><img alt='WalletImg' id="WalletImg" src={WalletImg} /></span>
                            </div>

                            <div id="C1Cont2">
                                <span id="BalanceText">$50,000<span id="ReduceText">.00</span></span>
                                <span><img alt='BalanceImg' id="BalanceImg" src={BalanceImg} /></span>
                            </div>

                            <div id="C1Cont3">
                                <span id="TransferCon" onClick={OpenModal1}><img alt='TransferImg' id="TransferImg" src={TransferImg} /><span>Transfer</span></span>
                                <span id="DepositCon"><img alt='DepositImg' id="DepositImg" src={DepositImg} /><span>Deposit</span></span>
                            </div>
                        </div>
                        <div id="Card2">
                            <div id="C2Cont">
                                <span id="AnalysisText">Income Analysis</span>
                                <span><img alt='AnalysisImg' id="AnalysisImg" src={AnalysisImg} /></span>
                            </div>

                            <div id="C2Cont2">
                                <span id="IncomeText">$850,600</span>
                                <span><img alt='IncomeImg' id="IncomeImg" src={IncomeImg} /></span>
                            </div>

                            <div id="C2Cont3">
                                <span id="IncreaseText">Income increased by <span id="ChangeToGreen">3.12%</span> this month</span>
                            </div>
                        </div>
                        <div id="Card3">
                            <div id="C3Cont">
                                <span id="C3ContText">Transactions</span>
                                <span id="C3ContText2">See more<img alt='RightImg' id="RightImg" src={RightImg} /></span>
                            </div>

                            <div id="TransacParent">
                                <div id="C3Cont2">
                                    <span><img alt='TransacImg' id="TransacImg" src={TransacImg} />
                                        <img alt='TransacImg2' id="TransacImg2" src={TransacImg2} /></span>
                                    <span id="NameAndDate"><span id="Name">Sandra Chima</span><span id="Date">10/03/23-12:09</span></span>
                                    <span id="GreenStat">+5,560</span>
                                </div>

                                <div id="C3Cont3">
                                    <span><img alt='TransacImg' id="TransacImg" src={TransacImg} />
                                        <img alt='TransacImg2' id="TransacImg2" src={TransacImg2} /></span>
                                    <span id="NameAndDate"><span id="Name">Adeola Steve</span><span id="Date">05/03/23-16:59</span></span>
                                    <span id="Stat">-1125</span>
                                </div>

                                <div id="C3Cont4">
                                    <span><img alt='TransacImg' id="TransacImg" src={TransacImg} />
                                        <img alt='TransacImg2' id="TransacImg2" src={TransacImg2} /></span>
                                    <span id="NameAndDate"><span id="Name">Chris Zach</span><span id="Date">26/02/23-1:09</span></span>
                                    <div id="Stat">-21500</div>
                                </div>

                                <div id="C3Cont5">
                                    <span><img alt='TransacImg' id="TransacImg" src={TransacImg} />
                                        <img alt='TransacImg2' id="TransacImg2" src={TransacImg2} /></span>
                                    <span id="NameAndDate"><span id="Name">Sandra Chima</span><span id="Date">18/02/23-13:09</span></span>
                                    <span id="GreenStat">+4500</span>
                                </div>


                                <div id="C3Cont6">
                                    <span><img alt='TransacImg' id="TransacImg" src={TransacImg} />
                                        <img alt='TransacImg2' id="TransacImg2" src={TransacImg2} /></span>
                                    <span id="NameAndDate"><span id="Name">Mike Charles</span><span id="Date">12/01/23-19:40</span></span>
                                    <span id="GreenStat">+91000</span>
                                </div>

                                <div id="C3Cont7">
                                    <span><img alt='TransacImg' id="TransacImg" src={TransacImg} />
                                        <img alt='TransacImg2' id="TransacImg2" src={TransacImg2} /></span>
                                    <span id="NameAndDate"><span id="Name">Nikita Pearl</span><span id="Date">10/01/23-09:19</span></span>
                                    <span id="Stat">-2400</span>
                                </div>
                            </div>
                        </div>
                        <div id="Card4">
                            <div id="C4Cont">
                                <span id="CardText">Card</span>
                                <span id="ManageText">Manage</span>
                            </div>
                            <div id="C4Cont2">
                                <span><img alt='CardDesignImg' id="CardDesignImg" src={CardDesignImg} /><img alt='CardDesignImg2' id="CardDesignImg2" src={CardDesignImg2} /><span id='VirtualCardSec'>Virtual Card</span></span>
                                <span id='CardSec2'><span id="CardNo">**** **** **** 6578</span><img alt='CardDesignImg3' id="CardDesignImg3" src={CardDesignImg3} /></span>
                                <span id='CardSec3'><span id="CardDate">02/26</span><span id="CardDate2">Citi</span><img alt='CardDesignImg4' id="CardDesignImg4" src={CardDesignImg4} /></span>
                            </div>

                            <div id="C4Cont3">
                                <span id="CardText">Bank</span>
                                <span id="ManageText">Manage</span>
                            </div>

                            <div id="C4Cont4">
                                <svg id="CardSVG" xmlns="http://www.w3.org/2000/svg" width="244" height="143" viewBox="0 0 244 143" fill="none">
                                    <path d="M-105.737 79.3104C-79.982 74.4618 -40.2069 60.0185 1.96492 44.7079C73.5389 18.7215 152.022 -9.77274 180.482 1.87904C197.751 8.94804 196.585 30.8437 164.232 77.1375V77.1429V77.1474C156.044 94.2735 161.565 103.382 175.545 107.297C203.202 115.042 264.052 102.372 317.228 91.297C341.217 86.3021 363.644 81.6323 380.75 79.3104L380.716 79.1622C363.6 81.4859 341.17 86.1567 317.175 91.1525C264.025 102.22 203.207 114.883 175.604 107.154C161.739 103.27 156.271 94.2241 164.407 77.1985C196.822 30.8132 197.945 8.85556 180.571 1.74345C152.024 -9.94244 73.4951 18.5688 1.87929 44.5723C-40.2818 59.8802 -80.0482 74.3181 -105.784 79.1658L-105.737 79.3104ZM-105.737 81.9358C-80.3401 77.1519 -41.6061 63.3496 -0.532951 48.7223C70.069 23.5709 147.594 -4.04697 176.12 7.43512C193.246 14.329 192.692 35.3672 162.302 79.5932V79.5986V79.604C154.004 98.3203 160.242 107.986 175.291 111.894C203.412 119.199 262.368 106.328 314.588 94.9191C339.552 89.4672 362.979 84.352 380.757 81.9385L380.723 81.7903C362.937 84.2056 339.507 89.3226 314.538 94.7754C262.337 106.173 203.417 119.042 175.35 111.752C160.416 107.873 154.234 98.2673 162.481 79.6569C192.931 35.3385 193.446 14.2384 176.211 7.30133C147.603 -4.21397 70.0281 23.4201 -0.615662 48.5858C-41.6791 63.2159 -80.4072 77.0109 -105.784 81.7903L-105.737 81.9358ZM-105.737 84.5611C-80.7089 79.8473 -43.0375 66.6934 -3.0785 52.7421C66.5611 28.4266 143.15 1.68509 171.763 12.9876C188.76 19.701 188.811 39.8809 160.378 82.0489L160.374 82.0552V82.0606C151.991 102.381 158.928 112.588 174.993 116.467C203.515 123.359 260.854 110.257 312.224 98.5178C338.055 92.6151 362.376 87.0573 380.755 84.562L380.721 84.4148C362.33 86.9118 338.003 92.4706 312.168 98.3741C260.82 110.107 203.512 123.203 175.044 116.325C159.095 112.471 152.214 102.325 160.551 82.1153C189.047 39.8548 188.952 19.614 171.85 12.8583C143.152 1.52348 66.5182 28.2812 -3.16315 52.6101C-43.1086 66.5542 -80.776 79.7045 -105.784 84.4157L-105.737 84.5611ZM-105.737 87.1866C-81.0952 82.5454 -44.503 70.0371 -5.68048 56.7682C63.0084 33.2905 138.684 7.42435 167.412 18.5374C184.281 25.0623 184.944 44.382 158.446 84.5055V84.5109V84.5181C150.005 106.451 157.615 117.18 174.644 121.02C203.509 127.527 259.469 114.177 310.083 102.102C336.693 95.7541 361.826 89.7581 380.757 87.1874L380.723 87.0402C361.781 89.6117 336.643 95.6096 310.026 101.958C259.437 114.028 203.507 127.368 174.699 120.876C157.78 117.066 150.23 106.391 158.625 84.563C185.182 44.3469 184.475 24.9662 167.499 18.4C138.69 7.25554 62.9695 33.1396 -5.76027 56.6317C-44.5779 69.8988 -81.1575 82.4026 -105.784 87.0411L-105.737 87.1866ZM-105.737 89.812C-81.501 85.2471 -46.0103 73.3879 -8.34669 60.8024C59.4032 38.1632 134.19 13.1726 163.062 24.0791C179.814 30.4091 181.09 48.866 156.516 86.9594V86.9657V86.9729C148.037 110.524 156.297 121.764 174.238 125.548C203.403 131.698 258.175 118.084 308.121 105.671C335.434 98.8832 361.31 92.4526 380.75 89.8128L380.716 89.6656C361.263 92.3063 335.382 98.7396 308.055 105.531C258.137 117.938 203.392 131.544 174.285 125.406C156.458 121.645 148.259 110.463 156.696 87.0222C181.329 48.8354 180.007 30.3176 163.149 23.9471C134.196 13.0074 59.3652 38.0124 -8.42454 60.665C-46.0803 73.2497 -81.5632 85.1017 -105.784 89.6665L-105.737 89.812ZM-105.737 92.4373C-81.9291 87.9533 -47.5662 76.7433 -11.0878 64.8437C55.7357 43.045 129.662 18.9298 158.713 29.6199C175.359 35.7453 177.253 53.3383 154.587 89.4187V89.4259V89.4321C146.091 114.604 154.976 126.345 173.78 130.062C203.208 135.879 256.953 121.99 306.311 109.231C334.282 102.002 360.842 95.1391 380.758 92.4346L380.724 92.2874C360.796 94.9927 334.229 101.859 306.249 109.089C256.919 121.839 203.201 135.721 173.83 129.913C155.147 126.219 146.32 114.535 154.776 89.4725C177.499 53.2997 175.558 35.6465 158.805 29.4816C129.674 18.7619 55.7055 42.8915 -11.1559 64.7028C-47.6353 76.6033 -81.9904 87.8106 -105.784 92.2919L-105.737 92.4373ZM-105.737 95.0627C-82.3835 90.6631 -49.1786 80.1068 -13.9185 68.8959C51.9913 47.9402 125.087 24.6995 154.359 35.1509C170.915 41.0625 173.431 57.7891 152.658 91.8753V91.8825V91.8896C144.164 118.683 153.649 130.913 173.267 134.556C202.933 140.065 255.783 125.888 304.624 112.788C333.19 105.124 360.389 97.8282 380.75 95.0636L380.716 94.9164C360.342 97.6819 333.133 104.98 304.552 112.647C255.742 125.74 202.916 139.909 173.307 134.411C153.805 130.789 144.382 118.614 152.839 91.9318C173.671 57.7514 171.105 40.9646 154.442 35.0153C125.091 24.5361 51.9504 47.7903 -13.9934 68.7603C-49.2486 79.9658 -82.4448 90.5213 -105.784 94.9173L-105.737 95.0627ZM-105.737 97.6881C-82.8701 93.3783 -50.8561 83.4792 -16.8571 72.9597C48.1516 52.8472 120.452 30.4837 149.995 40.6719C166.482 46.3573 169.635 62.2165 150.728 94.3319V94.3391V94.3462C142.251 122.761 152.312 135.469 172.701 139.035C202.581 144.257 254.661 129.781 303.041 116.334C332.178 108.236 359.974 100.51 380.756 97.689L380.722 97.5409C359.924 100.365 332.121 108.093 302.974 116.193C254.614 129.636 202.563 144.1 172.738 138.885C152.468 135.347 142.47 122.69 150.911 94.3866C169.872 62.177 166.675 46.2603 150.077 40.5345C120.454 30.3212 48.1156 52.6999 -16.9301 72.8214C-50.9262 83.3373 -82.9304 93.2383 -105.784 97.5427L-105.737 97.6881ZM-105.737 100.314C-83.3946 96.1052 -52.6252 86.8615 -19.9252 77.0387C44.1951 57.7765 115.738 36.2858 145.611 46.1786C162.056 51.6251 165.859 66.6152 148.799 96.7894L148.794 96.7974V96.8037C140.35 126.837 150.962 140.021 172.082 143.5C202.158 148.453 253.562 133.672 301.542 119.875C331.209 111.345 359.566 103.19 380.75 100.314L380.716 100.166C359.517 103.045 331.15 111.201 301.474 119.735C253.52 133.524 202.143 148.298 172.124 143.353C151.122 139.895 140.576 126.762 148.986 96.8432C166.091 66.573 162.243 51.521 145.689 46.0439C115.741 36.1251 44.1591 57.6266 -19.9963 76.9005C-52.6904 86.7179 -83.4549 95.966 -105.784 100.168L-105.737 100.314ZM-105.737 102.939C-83.9667 98.8392 -54.4905 90.2573 -23.1529 81.1357C40.0887 62.7292 110.915 42.1094 141.198 51.6691C157.643 56.8607 162.109 70.9816 146.873 99.2469V99.2531V99.2603C138.475 130.91 149.614 144.562 171.426 147.952C201.688 152.656 252.506 137.561 300.137 123.411C330.302 114.45 359.193 105.868 380.76 102.94L380.726 102.792C359.142 105.722 330.243 114.307 300.067 123.271C252.451 137.414 201.662 152.501 171.455 147.806C149.76 144.434 138.686 130.836 147.053 99.2971C162.339 70.9367 157.819 56.7574 141.268 51.53C110.917 41.946 40.0527 62.5739 -23.2229 80.9939C-54.5557 90.1163 -84.028 98.6956 -105.784 102.79L-105.737 102.939ZM-105.737 105.563C-84.5992 101.582 -56.4844 93.6701 -26.5761 85.2552C35.7975 67.7035 105.948 47.9609 136.723 57.1381C153.214 62.0558 158.381 75.3058 144.942 101.704V101.711V101.717C136.6 134.978 148.25 149.093 170.715 152.393C201.154 156.866 251.458 141.448 298.788 126.943C329.429 117.552 358.826 108.543 380.758 105.564L380.724 105.417C358.77 108.398 329.366 117.41 298.715 126.804C251.41 141.302 201.134 156.709 170.756 152.246C148.406 148.963 136.824 134.9 145.136 101.751C158.622 75.2573 153.407 61.949 136.802 56.9981C105.956 47.8002 35.7664 67.5535 -26.6355 85.1143C-56.5466 93.5283 -84.6595 101.443 -105.784 105.418L-105.737 105.563ZM-105.737 108.189C-85.3096 104.341 -58.6407 97.1045 -30.2592 89.4034C31.2387 72.7163 100.766 53.8474 132.154 62.5775C148.769 67.198 154.68 79.5779 143.009 104.162V104.166V104.174C134.738 139.044 146.868 153.615 169.963 156.825C200.569 161.079 250.425 145.332 297.494 130.471C328.589 120.651 358.467 111.216 380.756 108.191L380.722 108.042C358.413 111.071 328.526 120.51 297.42 130.332C250.371 145.189 200.538 160.924 169.992 156.678C147.019 153.484 134.953 138.964 143.196 104.207C154.911 79.5258 148.948 67.0884 132.22 62.4365C100.767 53.6903 31.2017 72.5664 -30.3244 89.2624C-58.7 96.9618 -85.365 104.198 -105.784 108.043L-105.737 108.189ZM-105.737 110.814C-86.1162 107.119 -61.0023 100.567 -34.2634 93.5902C26.3403 77.7777 95.2889 59.7878 127.436 67.9773C144.289 72.271 151.014 83.78 141.082 106.619V106.627C132.883 143.099 145.487 158.125 169.174 161.244C199.939 165.294 249.408 149.212 296.257 133.992C327.784 123.745 358.125 113.88 380.758 110.811L380.724 110.663C358.062 113.744 327.711 123.608 296.172 133.857C249.352 149.075 199.91 165.144 169.205 161.101C145.635 157.998 133.099 143.021 141.271 106.66C151.243 83.7243 144.464 72.1569 127.499 67.8355C95.2909 59.6297 26.3082 77.6286 -34.3218 93.4484C-61.0617 100.423 -86.1717 106.975 -105.784 110.669L-105.737 110.814ZM-105.737 113.44C-87.0543 109.921 -63.6432 104.065 -38.7084 97.8291C20.9602 82.9046 89.3552 65.7991 122.459 73.326C139.72 77.2506 147.369 87.8932 139.149 109.078V109.082C131.037 147.152 144.089 162.631 168.341 165.659C199.265 169.519 248.396 153.103 295.053 137.514C326.999 126.845 357.786 116.559 380.75 113.441L380.716 113.293C357.728 116.414 326.933 126.704 294.975 137.382C248.345 152.962 199.24 169.369 168.373 165.516C144.235 162.499 131.255 147.075 139.339 109.115C147.599 87.8312 139.889 77.133 122.514 73.1814C89.3522 65.6392 20.9261 82.7555 -38.7687 97.6863C-63.7006 103.922 -87.1097 109.777 -105.784 113.295L-105.737 113.44ZM-105.737 116.065C-88.1772 112.756 -66.6665 107.617 -43.7498 102.14C14.8824 88.1329 82.7169 71.9172 117.039 78.6037C134.987 82.1001 143.758 91.8753 137.219 111.537V111.543C129.199 151.211 142.686 167.135 167.482 170.072C198.559 173.753 247.4 156.994 293.898 141.039C326.246 129.939 357.46 119.228 380.75 116.066L380.716 115.919C357.403 119.084 326.178 129.798 293.821 140.902C247.342 156.849 198.531 173.598 167.511 169.924C142.835 167.001 129.413 151.125 137.409 111.573C143.983 91.807 135.148 81.9771 117.088 78.4574C82.712 71.7601 14.8483 87.9749 -43.8082 101.996C-66.722 107.473 -88.2307 112.614 -105.784 115.92L-105.737 116.065ZM-105.737 118.69C-89.5628 115.644 -70.2348 111.244 -49.6476 106.561C7.73521 93.5004 74.9051 78.2114 110.805 83.7917C129.918 86.7628 140.155 95.6643 135.289 113.999C127.363 155.257 141.278 171.628 166.59 174.475C197.819 177.987 246.41 160.883 292.777 144.557C325.515 133.031 357.143 121.896 380.75 118.691L380.716 118.544C357.086 121.751 325.446 132.891 292.696 144.421C246.355 160.735 197.791 177.832 166.618 174.327C141.415 171.492 127.582 155.169 135.48 114.022C140.371 95.5844 130.071 86.6317 110.841 83.6426C74.8944 78.0551 7.69531 93.3496 -49.704 106.415C-70.2873 111.101 -89.6125 115.499 -105.784 118.545L-105.737 118.69ZM-105.737 121.316C-91.3445 118.605 -74.6233 114.99 -56.8308 111.14C-1.16447 99.1086 64.9808 84.8117 102.939 88.8683C124.131 91.1327 136.524 99.1283 133.362 116.457C125.546 159.298 139.857 176.113 165.668 178.872C197.049 182.225 245.426 164.768 291.688 148.074C324.803 136.125 356.834 124.565 380.749 121.318L380.715 121.169C356.778 124.42 324.732 135.984 291.604 147.939C245.369 164.623 197.019 182.073 165.695 178.724C139.998 175.978 125.757 159.209 133.553 116.477C136.734 99.0412 124.273 90.9971 102.964 88.7192C64.9672 84.659 -1.1995 98.9622 -56.8843 111C-74.6759 114.846 -91.3971 118.461 -105.784 121.17L-105.737 121.316ZM-105.737 66.1861C-78.3589 61.0295 -33.5521 43.388 13.92 24.6969C90.4898 -5.44945 173.999 -38.3289 202.387 -25.9319C219.829 -18.3143 216.445 6.44386 177.809 59.5229C212.795 10.1844 215.175 -13.1156 198.089 -20.497C169.623 -32.798 87.0977 -0.774185 11.499 28.5595C-34.9241 46.5701 -78.7326 63.5696 -105.784 68.6642L-105.737 68.8097C-78.6664 63.7106 -34.8463 46.7075 11.5866 28.6915C87.1414 -0.625153 169.619 -32.6264 197.992 -20.3695C215.422 -12.8399 212.416 11.4424 174.814 63.3901C208.774 15.1739 210.771 -7.64745 193.7 -14.9355C165.236 -27.0892 83.7318 4.05371 9.1413 32.556C-36.2338 49.894 -79.0508 66.2543 -105.784 71.2896L-105.737 71.4351C-78.9778 66.3953 -36.156 50.0314 9.22886 32.6898C83.7756 4.20544 165.232 -26.9195 193.605 -14.808C211.039 -7.36462 208.417 16.4507 171.789 67.3255C204.776 20.1796 206.394 -2.17848 189.318 -9.37677C160.843 -21.3796 80.3455 8.88608 6.75533 36.5551C-37.5611 53.2198 -79.3719 68.9398 -105.784 73.915L-105.737 74.0578C-79.3057 69.079 -37.4852 53.3554 6.84096 36.6889C80.3884 9.03424 160.838 -21.2108 189.224 -9.24478C206.655 -1.89745 204.432 21.4187 168.887 71.1154C200.804 25.1395 202.02 3.28333 184.943 -3.81352C156.44 -15.6655 76.932 13.7274 4.34114 40.5624C-38.9098 56.5491 -79.7057 71.6281 -105.784 76.5395L-105.737 76.685C-79.6385 71.77 -38.8339 56.6865 4.42191 40.6971C76.9778 13.8774 156.435 -15.4931 184.849 -3.68153C202.267 3.55627 200.49 26.3076 166.166 74.6791V74.6854C158.12 90.2384 162.905 98.7755 175.765 102.673C202.873 110.893 265.981 98.3957 320.225 87.6534C343.092 83.1245 364.391 78.9072 380.75 76.6868L380.716 76.5386C364.358 78.76 343.058 82.9782 320.18 87.508C265.961 98.2457 202.887 110.736 175.828 102.535C163.081 98.674 158.346 90.1962 166.339 74.7446C166.903 73.9497 167.457 73.162 168.004 72.3814C160.244 86.2923 164.294 94.1936 175.946 98.0311C202.422 106.751 268.254 94.3857 323.692 83.9722C345.263 79.9209 365.26 76.1606 380.75 74.0614L380.716 73.9132C365.223 76.0169 345.221 79.7746 323.646 83.8267C268.236 94.2349 202.439 106.594 176.022 97.8938C164.443 94.0787 160.453 86.1962 168.267 72.2907C168.767 71.5958 169.26 70.9074 169.746 70.2256C162.432 82.4368 165.765 89.6449 176.127 93.3711C201.852 102.624 271.026 90.3309 327.778 80.2459C347.801 76.6877 366.278 73.4041 380.75 71.4395L380.716 71.2914C366.241 73.2569 347.761 76.5413 327.734 80.0996C271.011 90.1765 201.873 102.463 176.211 93.232C165.832 89.5013 162.588 82.2285 170.194 69.8377C170.558 69.3385 170.912 68.8501 171.269 68.3526C164.69 78.7537 167.361 85.1511 176.322 88.6905C201.169 98.5052 274.556 86.198 332.73 76.4416C350.859 73.4005 367.512 70.6054 380.75 68.8097L380.716 68.6624C367.471 70.4582 350.819 73.2533 332.689 76.2944C274.546 86.0462 201.197 98.3481 176.415 88.5576C167.268 84.9445 164.761 78.3029 172.126 67.3811L172.326 67.1118C167.065 75.4136 169.199 80.7963 176.564 84.0117C200.405 94.427 279.301 81.9573 338.948 72.5332C354.674 70.0487 369.061 67.7744 380.753 66.1879L380.719 66.0406C369.036 67.6263 354.641 69.9015 338.909 72.3868C279.293 81.8065 200.442 94.2654 176.661 83.8797C168.757 80.4282 166.968 74.4322 174.053 64.929C216.442 8.06902 220.604 -18.1544 202.484 -26.0639C174.003 -38.5004 90.445 -5.6021 13.8305 24.5622C-33.6319 43.2488 -78.428 60.8868 -105.784 66.0388L-105.737 66.1861Z" fill="#5381F5" />
                                </svg>
                                <span id='Card4Sec'>UBA</span>
                                <span id='Card4Sec2'><span id="Card4Owner">Omotola Jane</span><img alt='CardDesignImg5' id="CardDesignImg5" src={CardDesignImg3} /></span>
                                <span id='Card4Sec3'>12****4568</span>
                            </div>
                        </div>
                        <div id="Card5">
                            <span id='Card5Sec'><img alt='LogoImg' id="LogoImg" src={LogoImg} /></span>
                            <span id='Card5Sec2'><span id="FirstHalf">Our</span> <br /> <span id="LastHalf">mobile app<img src={PlaneLinesImg} alt="PaperPlaneLines" /><img id="PlaneImg" src={PlaneImg} alt="PlaneImg" /></span></span>
                            <span id='Card5Sec3'><img alt='ComingSoonImg' id="ComingSoonImg" src={ComingSoonImg} /><span id="ComingSoonText">Coming Soon!</span></span>
                            <span id='Card5Sec4'>
                                <img alt='PhoneImg' id="PhoneImg" src={PhoneImg} />
                                <img alt='BellImg' id="BellImg" src={BellImg} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}