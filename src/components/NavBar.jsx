import { Link } from "react-router-dom"
import { useEffect } from "react";
import "../css/NavBar.css"

function NavBar() {
    useEffect(() => {
        const searchToggle = document.getElementById('searchToggle');
        const searchContainer = document.getElementById('searchContainer');
        const categoryToggle = document.getElementById('categoryToggle');
        const categoryContainer = document.getElementById('categoryContainer');

        const handleSearchToggle = () => {
            if (categoryContainer.classList.contains('show')) {
                categoryContainer.classList.remove('show');
            }
            searchContainer.classList.toggle('show');
        };

        const handleCategoryToggle = () => {
            if (searchContainer.classList.contains('show')) {
                searchContainer.classList.remove('show');
            }
            categoryContainer.classList.toggle('show');
        };

        searchToggle.addEventListener('click', handleSearchToggle);
        categoryToggle.addEventListener('click', handleCategoryToggle);

        return () => {
            searchToggle.removeEventListener('click', handleSearchToggle);
            categoryToggle.removeEventListener('click', handleCategoryToggle);
        };
    }, []);

    return (
        <header className="navbar">
            <div className="custom-toggler">
                <button className="navbar-toggler-icon" id="categoryToggle"> </button>
            </div>
            <nav className="hidden-container-mobile" id="categoryContainer">
                <ul>
                    <li className="nav-item">
                        <Link to="/alimentos">Alimentos</Link>
                    </li>
                    <li className="nav-item">
                        <Link>Calzado</Link>
                    </li>
                    <li className="nav-item">
                        <Link>Accesorios</Link>
                    </li>
                    <li className="nav-item">
                        <Link>Higiene</Link>
                    </li>
                </ul>
            </nav>
            <Link className="navbar-brand" to="/">
                <img src="/icons/logo-bg.svg" alt="logo de marca Hecho en Nuevo León"/>
            </Link>
            <button type="button" className="search-icon-mobile" id="searchToggle">
                <img src="/icons/basil--search-outline.svg" alt="Buscar" className="search-icon"/>
            </button>
            <div className="hidden-container-mobile" id="searchContainer">
                <form className="search-bar" role="search">
                    <input className="form-control" type="search" placeholder="Buscar" aria-label="Search" />
                    <button type="submit" className="search-btn">
                        <img src="/icons/basil--search-outline.svg" alt="Buscar" className="search-icon"/>
                    </button>
                </form>
            </div>
        </header>
    );
}

export default NavBar