import { Box } from "@mui/material";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assests/logo.png";

const useSXStyles = () => ({
  boxWrapper: {
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
    //padding: "20px 20px", 
    position: 'fixed',
    width: '100%',
    zIndex: '90'
  },
  logo: {
    width: "170px",
    margin: '10px 20px'
  },
  linkWrapper: {
    position: "absolute",
    right: "0px",
  },
});

const link = {
  color: "#ffffff",
  marginRight: "25px",
  textDecoration: "none",
};

const activeLink = {
  color: "#ffffff",
  marginRight: "25px",
  textDecoration: "none",
  paddingBottom: "10px",
  borderBottom: "1px solid white",
};

function Header() {
  const sxStyles = useSXStyles();
  return (
    <Box component="div" sx={sxStyles.boxWrapper}>
      <Box component="div">
       
        <Link to="/" >
        <img src={logo} alt="logo" style={sxStyles.logo} />
            </Link>
        
      </Box>
      <Box component="div" sx={sxStyles.linkWrapper}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          Cart
        </NavLink>
      </Box>
    </Box>
  );
}

export default Header;
