import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
    const { requiresLoggedIn, permission, to, title } = props;
    
    const storeExtractor = useSelector(store => store);

    const { loggedIn, token } = storeExtractor;

    const shouldShow = (token.permLv >= permission) && (requiresLoggedIn === loggedIn || requiresLoggedIn === false)
    
    return (
        <div className={shouldShow ? "custom_button_holder" : ""}>
            {shouldShow ? <NavLink activeClassName="active" className="custom_button" to={`/${to}`}>{title}</NavLink> : ""}
        </div>
    )
}

export default NavbarItem;