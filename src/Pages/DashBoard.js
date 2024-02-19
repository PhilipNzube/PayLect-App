import { Outlet } from 'react-router-dom';

import PopUp from '../components/PopUp';
import SideBar from '../components/SideBar';
import TopSec from '../components/TopSec';

export default function DashBoard() {
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
    });



    const CloseSideBar = () => {
        document.getElementById("SideBarDeactivator").style.display = "none";
        document.getElementById("DashTopSubSec3").style.display = "block";
        document.getElementById("FixedBar").style.display = "none";
    }




    return (
        <>
            <div id="DashContainer">
                <div id="SideBarDeactivator" onClick={CloseSideBar}></div>
                <PopUp />
                <SideBar />
                <div id="DashMain">
                    <TopSec />
                    <Outlet />
                </div>
            </div>
        </>
    )
}