export default function PageNumbering(props) {
    return (
        <>
            {props.highlighted == "true"
                ? <div id="Numbers">{props.value}</div>
                : <div id="Numbers2">{props.value}</div>
            }
        </>
    )
}