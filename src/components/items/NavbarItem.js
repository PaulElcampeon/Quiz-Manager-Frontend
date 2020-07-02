import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import { logoutAction } from '../../store/actions';

const NavbarItem = (props) => {
    const { requiresLoggedIn, permission, to, title } = props;

    //History tools
    const history = useHistory();

    //Redux tools
    const dispatch = useDispatch();
    const storeExtractor = useSelector(store => store);
    const { loggedIn, token } = storeExtractor;

    var shouldShow = (token.permLv >= permission) && (requiresLoggedIn === loggedIn || requiresLoggedIn === false)

    if (title === "LOGIN" && loggedIn) shouldShow = false;

    const handleOnClick = (e) => {
        if (title === "LOGOUT") {
            e.preventDefault();
            dispatch(logoutAction());
            history.push("/");
        }
    }

    return (
        <div className={shouldShow ? "custom_button_holder" : ""}>
            {shouldShow ? <NavLink onClick={handleOnClick} activeClassName="nav_link_active" className="custom_button" to={`/${to}`}>{title}</NavLink> : ""}
        </div>
    )
}

export default NavbarItem;