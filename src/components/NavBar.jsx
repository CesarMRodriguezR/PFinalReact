import {Link} from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item"><Link to="/alimentos">Alimentos</Link></li>
                <Link>Calzado</Link>
                <Link>Accesorios</Link>
                <Link>Higiene</Link>
            </ul>
        </nav>
    );
}

export default NavBar