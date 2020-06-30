import React from 'react';
import NavbarItem from "./NavbarItem";

const sections = [
    { directorty: "Home", to: "home", title: "HOME", requiresLoggedIn: false, permission: "1" },
    { directorty: "Login", to: "login", title: "LOGIN", requiresLoggedIn: false, permission: "1" },
    { directorty: "Quizzes", to: "quizzes", title: "QUIZZES", requiresLoggedIn: true, permission: "1" },
    { directorty: "Create", to: "create", title: "HOME", requiresLoggedIn: true, permission: "3" },
    { directorty: "Logout", to: "/", title: "LOGOUT", requiresLoggedIn: true, permission: "1" },


]
const Navbar = (props) => {
    return (
        <div className="navbar_holder">
            {sections.map(element => <NavbarItem key={element.to} to={element.to} title={element.title} requiresLoggedIn={element.requiresLoggedIn} permission={element.permission}/>)}
        </div>
    )
}

export default Navbar;