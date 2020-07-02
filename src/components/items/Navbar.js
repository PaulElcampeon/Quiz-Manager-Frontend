import React from 'react';
import NavbarItem from "./NavbarItem";

const sections = [
    { directorty: "Login", to: "", title: "LOGIN", requiresLoggedIn: false, permission: 1 },
    { directorty: "Quizzes", to: "quizzes", title: "QUIZZES", requiresLoggedIn: true, permission: 1 },
    { directorty: "Create", to: "create", title: "CREATE", requiresLoggedIn: true, permission: 3 },
    { directorty: "Logout", to: "/logout", title: "LOGOUT", requiresLoggedIn: true, permission: 1 }
]

const Navbar = (props) => {
    return (
        <div className="navbar_holder">
            {sections.map((element, index) => <NavbarItem key={index} to={element.to} title={element.title} requiresLoggedIn={element.requiresLoggedIn} permission={element.permission} />)}
    
        </div>
    )
}

export default Navbar;