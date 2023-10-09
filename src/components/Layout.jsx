import React from "react";
import { Link, Outlet } from "react-router-dom";
import Contacto from './Contacto'

const Layout = () => {
    return (
        <React.Fragment>
            <header>
                <div>
                    <nav className="navbar">
                        <Link to={"/home"} className="nav-link">
                            Home
                        </Link>
                        <Link to={"/info"} className="nav-link">
                            Información Personal
                        </Link>
                        <Link to={"/creaciones"} className="nav-link">
                            Mis Creaciones
                        </Link>
                        <Link to={"/favoritos"} className="nav-link">
                            Favoritos
                        </Link>
                    </nav>
                </div>
            </header>
            <div className="content">
                <Outlet />
            </div>
            <footer>
                
            </footer>
        </React.Fragment>
    );
};

export default Layout;
