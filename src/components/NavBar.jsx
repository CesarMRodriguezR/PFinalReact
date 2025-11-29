import {Link} from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
    return (
        <nav ClassName="navbar">
            <Link to="/alimentos">Alimentos</Link>
            <Link>Calzado</Link>
            <Link>Accesorios</Link>
            <Link>Higiene</Link>
        </nav>
    );
}

export default NavBar