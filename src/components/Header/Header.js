import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const  activeStyle ={
        fontWeight: "bold",
        color: "white",
        backgroundColor: "lightgray"
    }
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                {/* <Link activeStyle={activeStyle} to="/shop">Shop</Link>
                <Link activeStyle={activeStyle} to="/order-review">Order Review</Link>
                <Link activeStyle={activeStyle} to="/inventory">Manage Inventory</Link> */}
                <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                <NavLink activeStyle={activeStyle} to="/order-review">Order Review</NavLink>
                <NavLink activeStyle={activeStyle} to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;