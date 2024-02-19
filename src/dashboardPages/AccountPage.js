import ProfilePic from '../images/Ellipse 793.png';
import AccountSettingsImg from '../images/People3.png';
import CardSettingsImg from '../images/ion_card.png';
import NotificationSettingsImg from '../images/mingcute_notification-fill.png';
import PasswordSettingsImg from '../images/mdi_password.png';
import SupportImg from '../images/fluent_person-support-20-filled.png';
import ContactUsImg from '../images/ion_call.png';
import TodayRateSettingsImg from '../images/Vector5.png';

export default function AccountPage() {
    const OpenModal8 = () => {
        document.getElementById("ModalActivator7").style.display = "block";
    }
    return (
        <>

            <div id="AccountSec">
                <div id="MyAccountText">My Account</div>
                <div id="ProfileSec"><img id="ProfilePic" src={ProfilePic} alt="ProfilePic" />Smith Layla</div>
                <div id="Settings">
                    <div id="AccountSettings" onClick={OpenModal8}><img id="AccountSettingsImg" src={AccountSettingsImg} alt="AccountSettingsImg" /><span id="AccountSettingsText">My Account Settings</span></div>
                    <div id="CardSettings"><img id="CardSettingsImg" src={CardSettingsImg} alt="CardSettingsImg" /><span id="CardSettingsText">Bank & Card Settings</span></div>
                    <div id="NotificationSettings"><img id="NotificationSettingsImg" src={NotificationSettingsImg} alt="NotificationSettingsImg" /><span id="NotificationSettingsText">Notification Settings</span></div>
                    <div id="PasswordSettings"><img id="PasswordSettingsImg" src={PasswordSettingsImg} alt="PasswordSettingsImg" /><span id="PasswordSettingsText">Password Settings</span></div>
                    <div id="Support"><img id="SupportImg" src={SupportImg} alt="SupportImg" /><span id="SupportText">Support</span></div>
                    <div id="ContactUs"><img id="ContactUsImg" src={ContactUsImg} alt="ContactUsImg" /><span id="ContactUsText">Contact Us</span></div>
                    <div id="TodayRateSettings"><img id="TodayRateSettingsImg" src={TodayRateSettingsImg} alt="TodayRateSettingsImg" /><span id="TodayRateSettingsText">Today’s Rates</span></div>
                </div>
            </div>
        </>
    )
}