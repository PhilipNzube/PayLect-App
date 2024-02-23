import TransacImg from '../images/Ellipse 4.png';
import TransacImg2 from '../images/uil_wallet.png';

export default function TransacActivity(props) {
    return (
        <>
            <div id="C3Cont2">
                <span id="ImgAndNameAndDate">
                    <span><img alt='TransacImg' id="TransacImg" src={TransacImg} />
                        <img alt='TransacImg2' id="TransacImg2" src={TransacImg2} /></span>
                    <span id="NameAndDate"><span id="Name">{props.Name}</span><span id="Date">{props.Date}</span></span>
                </span>
                {props.Credit == "true"
                    ? <span id="GreenStat">{props.Stat}</span>
                    : <span id="Stat">{props.Stat}</span>
                }
            </div>
        </>
    )
}