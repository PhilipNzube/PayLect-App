import Logo from '../images/logo.png';
import { Outlet } from "react-router-dom";

export default function AuthenticationPage() {
    return (
        <>
            <div id="Elilipse"></div>
            <div id="ModalBody">
                <div id="LOGO">
                    <img alt="" src={Logo} />
                </div>
                <Outlet />
            </div>
            <div id="Elilipse2"></div>
        </>
    )
}