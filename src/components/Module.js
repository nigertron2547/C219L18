import { getModule } from "../api";
import { useParams } from "react-router-dom";

export default function Module() {
    const { diplomaId, moduleId } = useParams();

    const {name, desc} = getModule({ diplomaId, moduleId });
return (
    <>
        <h3>{name}</h3>
        <p>{desc}</p>
    </>
    );
}
