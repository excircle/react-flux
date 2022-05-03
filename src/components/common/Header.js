import React from "react";
import { NavLink } from "react-router-dom";
import '../../Basic.css';

function Header() {
    return (
        <nav>
            <NavLink end to="/" className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}>Home</NavLink> | <NavLink end to="/courses" className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}>Courses</NavLink> | <NavLink end to="/about" className={({ isActive }) => (isActive ? "activeStyle" : "inactive")}>About</NavLink> |
        </nav>
    );
}

export default Header;