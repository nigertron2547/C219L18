import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
    const { diplomaId } = useParams();
    const diploma = getDiploma(diplomaId);

return (
    <>
        <h2>Modules offered by {diploma.name}</h2>

        <ul className="module-list" >

        {diploma?.modules.map(module => (
            <li className="module" key={module.id}>
            <NavLink 
            className={({ isActive }) => isActive ? "module-active" : null}
            to={module.id}>
            <p className="module-name">{module.name}</p>
            </NavLink>
        </li>
            ))}
    </ul>
    <Outlet />
    </>
);
}