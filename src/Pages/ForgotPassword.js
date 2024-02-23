import { useNavigate } from "react-router-dom"
export default function ForgotPassword() {
    const Navigate = useNavigate();
    const GoBackToSignIn = () => {
        Navigate("/SignIn");
    }

    return (
        <>
            <p id="Nothing" onClick={GoBackToSignIn}>NOTHING HERE TO SEE!!</p>
        </>
    )
}