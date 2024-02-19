import LeftArrowImg from '../images/Chevron3.png';
import RightArrowImg from '../images/Chevron.png';
import AlertImg from '../images/Alert Badge.png';
import BadgeImg from '../images/Ellipse 30.png';
import ProfileImg1 from '../images/Rectangle 43.png';
import ProfileImg2 from '../images/Chevron2.png';
import SandwichMenuImg from '../images/Group 211.png';

export default function TopSec() {
    const OpenSideBar = () => {
        document.getElementById("SideBarDeactivator").style.display = "block";
        document.getElementById("FixedBar").style.display = "block";
    }
    return (
        <>
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
        </>
    )
}