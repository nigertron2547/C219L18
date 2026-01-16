import { useLocation } from "react-router-dom";

export default function Confirmation() {
const { state } = useLocation();
return (
    <div className="container">
        {state && (
        <>
        <p>Congrats<strong>{state.name}</strong>, you're now registered for the {state.course}.</p>
        <p>We've sent more details to <strong>{state.email}</strong></p>
        </>
    )}

    </div>
    );
}
