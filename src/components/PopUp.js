import CloseImg from '../images/password icons.png';
import RadioBoxImg from '../images/Component 2.png';
import RadioBoxImg2 from '../images/Component 3.png';
import MoneySentImg from '../images/Frame 1456.png';
import AccountSettingsImg from '../images/People3.png';
import NotificationSettingsImg from '../images/mingcute_notification-fill.png';
import PasswordSettingsImg from '../images/mdi_password.png';
import ContactUsImg from '../images/ion_call.png';
import USQImg from '../images/mynaui_key.png';
import BVNSettingsImg from '../images/streamline_padlock-square-1.png';
import UpdateProfileImg from '../images/Group 47700.png';

export default function PopUp() {

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

    const CloseModal4 = () => {
        document.getElementById("ModalActivator4").style.display = "none";
        document.getElementById("ModalActivator3").style.display = "block";
    }

    const CloseModal5 = () => {
        document.getElementById("ModalActivator5").style.display = "none";
    }

    const CloseModal6 = () => {
        document.getElementById("ModalActivator6").style.display = "none";
    }

    const CloseModal7 = () => {
        document.getElementById("ModalActivator7").style.display = "none";
    }

    const CloseModal8 = () => {
        document.getElementById("ModalActivator8").style.display = "none";
    }


    const OpenModal2 = () => {
        document.getElementById("ModalActivator").style.display = "none";
        document.getElementById("ModalActivator2").style.display = "block";
    }

    const OpenModal3 = () => {
        document.getElementById("ModalActivator2").style.display = "none";
        document.getElementById("ModalActivator3").style.display = "block";
    }

    const OpenModal4 = () => {
        document.getElementById("ModalActivator3").style.display = "none";
        document.getElementById("ModalActivator4").style.display = "block";
    }

    const OpenModal5 = () => {
        document.getElementById("ModalActivator4").style.display = "none";
        document.getElementById("ModalActivator5").style.display = "block";
    }

    const OpenModal6 = () => {
        document.getElementById("ModalActivator5").style.display = "none";
        document.getElementById("ModalActivator6").style.display = "block";
    }


    const OpenModal7 = () => {
        document.getElementById("ModalActivator6").style.display = "none";
    }

    const OpenModal9 = () => {
        document.getElementById("ModalActivator8").style.display = "block";
    }
    return (
        <>
            <div id="ModalActivator" className="ModalActivatorClass">
                <div className="PopUp">
                    <div id="TransferModal">
                        <div id="TransferSec">
                            <span id="ModalHeaderText">Transfer</span>
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


            <div id="ModalActivator2" className="ModalActivatorClass">
                <div className="PopUp">
                    <div id="TransferModal2">
                        <div id="Transfer2Sec">
                            <span id="ModalHeaderText">Transfer to Bank</span>
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


            <div id="ModalActivator3" className="ModalActivatorClass">
                <div className="PopUp">
                    <span id="Scroller"></span>
                    <div id="TransferModal3">
                        <div id="Transfer2Sec">
                            <span id="ModalHeaderText">Transfer to Bank</span>
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

                            <div id="Transfer3Sec2Sub6" onClick={OpenModal4}>
                                <span id="Transfer3Text12">Proceed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div id="ModalActivator4" className="ModalActivatorClass">
                <div className="PopUp2">
                    <div id="TransferModal4">
                        <div id="ConfirmTransacSec">
                            <span id="ModalHeaderText">Confirm Transaction</span>
                            <span><img alt='CloseImg' id="CloseImg" src={CloseImg} onClick={CloseModal4} /></span>
                        </div>

                        <div id="ConfirmTransacSecText">Transfer <span id="AmountText">XXXXX.XX</span> to <span id="AccountNameText">ACCOUNT HOLDER’S NAME</span>-<span id="AccountNumberText">ACCOUNT NUMBER</span>.</div>

                        <div id="TransacPassword">
                            <span id="TransacPasswordText">Enter your password to complete transfer.</span>
                            <input name="TransacPasswordField" id="TransacPasswordField" type="text" />
                        </div>

                        <div id="TransacButtons">
                            <div id="TransacButton1" onClick={CloseModal4}>
                                <span id="TransacButton1Text">Cancel</span>
                            </div>

                            <div id="TransacButton2" onClick={OpenModal5}>
                                <span id="TransacButton2Text">Submit</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div id="ModalActivator5" className="ModalActivatorClass">
                <div className="PopUp2">
                    <div id="TransferModal4">
                        <div id="ConfirmTransacSec2">
                            <span id="ModalHeaderText"></span>
                            <span><img alt='CloseImg' id="CloseImg" src={CloseImg} onClick={CloseModal5} /></span>
                        </div>

                        <div id="MoneySent">
                            <img id="MoneySentImg" src={MoneySentImg} alt="MoneySentImg" />
                            <span id="MoneySentText">Money Sent!</span>
                        </div>

                        <div id="ConfirmTransacSecText">$<span id="AmountText">XXXXX.XX</span> sent to <span id="AccountNameText">ACCOUNT HOLDER’S NAME</span>-<span id="AccountNumberText">ACCOUNT NUMBER</span>.</div>

                        <div id="TransacButtons">
                            <div id="TransacButton1" onClick={CloseModal5}>
                                <span id="TransacButton1Text">Done</span>
                            </div>

                            <div id="TransacButton2" onClick={OpenModal6}>
                                <span id="TransacButton2Text">Receipt</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div id="ModalActivator6" className="ModalActivatorClass">
                <div className="PopUp2">
                    <div id="TransferModal5">
                        <div id="ConfirmTransacSec3">
                            <span id="ModalHeaderText">Transfer . <span id="AccountNumberText" className="AccountNumberTextClass">0123456789</span> </span>
                            <span><img alt='CloseImg' id="CloseImg" src={CloseImg} onClick={CloseModal6} /></span>
                        </div>


                        <div id="SuccessSec">
                            <div id="Date-Time-Money"><div id="DTM1"><span id="Day">8</span> <span id="Month">Sept</span> <span id="Year">2023</span> <span id="Hour">11</span>:<span id="Minute">57</span><span id="am-pm">pm</span></div><div id="DTM2">$<span id="AmountText">100,000</span></div></div>
                            <div id="SuccessText"><span>Success</span></div>
                        </div>

                        <div id="TransactionDetails">
                            <div id="AccountDetails">
                                Account<span id="BankName" className="ClassDesign">XXXXXXXXXX Bank Name</span>
                            </div>

                            <div id="AccountDetails">
                                Account name(Receiver)<span id="AccountNameText" className="ClassDesign">JOHN CIROMA OLAWALE</span>
                            </div>

                            <div id="AccountDetails">
                                Transfer fees<span id="NairaAmountText" className="ClassDesign">NGN 50.00</span>
                            </div>

                            <div id="AccountDetails">
                                Narration<span id="NarrationText" className="ClassDesign">Some Payment made up</span>
                            </div>
                        </div>

                        <div id="DownloadButton" onClick={OpenModal7}>
                            <span id="DownloadButtonText">Download Receipt</span>
                        </div>

                    </div>
                </div>
            </div>




            <div id="ModalActivator7" className="ModalActivatorClass">
                <div className="PopUp2">
                    <div className="TransferModal6">
                        <div className="CloseImgDiv"><img alt='CloseImg' id="CloseImg" src={CloseImg} onClick={CloseModal7} /></div>
                        <div id="SettingsModal">
                            <div className="SettingsModalButton" onClick={OpenModal9}><img className="SettingsModalButtonImg" src={AccountSettingsImg} alt="ProfileSettingsImg" /><span className="SettingsModalButtonText">Profile Settings</span></div>
                            <div className="SettingsModalButton"><img className="SettingsModalButtonImg" src={USQImg} alt="USQImg" /><span className="SettingsModalButtonText">2FA: Update Security Question</span></div>
                            <div className="SettingsModalButton"><img className="SettingsModalButtonImg" src={BVNSettingsImg} alt="BVNSettingsImg" /><span className="SettingsModalButtonText">BVN Settings</span></div>
                            <div className="SettingsModalButton"><img className="SettingsModalButtonImg" src={NotificationSettingsImg} alt="NotificationSettingsImg" /><span className="SettingsModalButtonText">Notification Settings</span></div>
                            <div className="SettingsModalButton"><img className="SettingsModalButtonImg" src={PasswordSettingsImg} alt="PasswordSettingsImg" /><span className="SettingsModalButtonText">Password Settings</span></div>
                            <div className="SettingsModalButton"><img className="SettingsModalButtonImg" src={ContactUsImg} alt="ContactUsImg" /><span className="SettingsModalButtonText">Contact Us</span></div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="ModalActivator8" className="ModalActivatorClass">
                <div className="PopUp2">
                    <div className="TransferModal6">
                        <div className="CloseImgDiv"><img alt='CloseImg' id="CloseImg" src={CloseImg} onClick={CloseModal8} /></div>
                        <div id="BasicDataDiv">
                            <div id="BasicDataSec1">
                                <div id="BasicHeader"><div id="BasicHeaderText">Basic Data</div> <div id="BasicHeaderText2">Change your avatar</div></div>
                                <div id="ChangePic"><img id="UpdateProfileImg" src={UpdateProfileImg} alt="ProfileImg"/><div id="UPIText">Tap to change</div></div>
                            </div>

                            <form id="BasicDataSec2">
                                <div id="BasicDataInputField">
                                    <label className="BasicDataLabel" for="BasicDataFirstName">First Name</label>
                                    <input className="BasicDataForm" type="text" id="BasicDataFirstName" placeholder='First Name' />
                                </div>

                                <div id="BasicDataInputField">
                                    <label className="BasicDataLabel" for="BasicDataLastName">Last Name</label>
                                    <input className="BasicDataForm" type="text" id="BasicDataLastName" placeholder='Last Name' />
                                </div>

                                <div id="BasicDataInputField">
                                    <label className="BasicDataLabel" for="BasicDataEmail">Email Address</label>
                                    <input className="BasicDataForm" type="email" id="BasicDataEmail" placeholder='Email' />
                                </div>

                                <div id="BasicDataInputField">
                                    <label className="BasicDataLabel" for="BasicDataPhone">Phone Number</label>
                                    <input className="BasicDataForm" type="number" id="BasicDataPhone" placeholder='Phone Number' />
                                </div>

                                <input id="BasicDataSubmitBut" type="submit" value="Update Profile" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}