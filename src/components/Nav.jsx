import { NavLink } from "react-router-dom";
import '../styles/nav.scss';

export default function Nav() {
    return (
        <nav>
            <ul className="tabs">
                <li>
                    <NavLink to={"html"} className="knapp">HTML</NavLink>
                </li>
                <li>
                    <NavLink to={"css"} className="knapp">CSS</NavLink>
                </li>
                <li>
                    <NavLink to={"javascript"} className="knapp">JavaScript</NavLink>
                </li>
                <li>
                    <NavLink to={"react"} className="knapp">React</NavLink>
                </li>
                <li>
                    <NavLink to={"headless-cms"} className="knapp">Sanity</NavLink>
                </li>
            </ul>
        </nav>
    );
}
