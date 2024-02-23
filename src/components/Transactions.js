export default function Transactions(props) {
    return (
        <>
            <div className="TransCont">
                <div className="ReceipientNameSub">{props.ReceipientNameSub}</div>
                <div className="AmountSub">{props.AmountSub}</div>
                <div className="ReferenceIDSub">{props.ReferenceIDSub}</div>
                <div className="StatusSub">
                    {
                        props.StatusSubText == "failure"
                            ? <div className="StatusSubText">Failure</div>
                            : props.StatusSubText == "success"
                                ? <div className="StatusSubText2">Success</div>
                                : props.StatusSubText == "pending"
                                    ? <div className="StatusSubText3">Pending</div>
                                    : []
                    }</div>
                <div className="TransDateSub">{props.TransDateSub}</div>
            </div>
        </>
    )
}