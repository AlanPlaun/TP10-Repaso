import React from "react";
import { Link, Outlet } from "react-router-dom";
import Contacto from './Contacto'

const Layout = () => {
    return (
        <React.Fragment>
            <header>
                <div>
                    <nav className="navbar">
                        <button>
                            <Link to={"/"} className="nav-link">
                                Home
                            </Link>
                        </button>
                        <button>
                            <Link to={"/info"} className="nav-link">
                                Información Personal
                            </Link>
                        </button>
                        <button>
                            <Link to={"/creaciones"} className="nav-link">
                                Mis Creaciones
                            </Link>
                        </button>
                        <button>
                            <Link to={"/favoritos"} className="nav-link">
                                Favoritos
                            </Link>
                        </button>
                    </nav>
                </div>
            </header>
            <div className="content">
                <Outlet />
            </div>
            <footer>
                <Contacto/>
            </footer>
        </React.Fragment>
    );
};

export default Layout;
