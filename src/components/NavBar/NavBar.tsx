import React, { FC } from "react";
import { NavLink } from "react-router-dom";
const NavBar: FC = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand">
                <i className="fab fa-rocketchat fa-3x" />
                Rocket-chat
            </NavLink>
        </nav>
    </header>
);
export default NavBar;
