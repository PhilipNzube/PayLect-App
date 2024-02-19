import SwapImg from '../images/Page-3.png';
import DropImg from '../images/teenyicons_down-solid.png';

export default function SwapCurrencyPage() {
    return (
        <>

            <div id="SwapcurrencySec">
                <div id="From-To-Popup">
                    <div id="SCSSec">
                        FROM<div id="FromFieldDiv"><input id="FromField" type="text" placeholder="5,000" /><div id="Max">Max</div></div>
                        <div id="AvailableBalance">
                            Available Balance: <span id="Balance">$50,000</span>
                        </div>
                    </div>

                    <div id="SCSSec2">
                        <img id="SwapDiv" src={SwapImg} alt="SwapImg" />
                    </div>


                    <div id="SCSSec3">
                        TO<div id="ToFieldDiv"><input id="ToField" type="text" placeholder="3,990.25" /><img src={DropImg} alt="DropDown" id="Drop" /></div>
                    </div>

                    <div id="SwapCurrencyButton">Swap Currency</div>

                </div>
            </div>

        </>
    )
}