import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SideBar from "./side-bar/SideBar";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#F2F2F2",
          }}
        >
          <a href="tel:+1 (800) 123-45-67" className="hover:underline">
            <LocalPhoneIcon />
            +1 (800) 123-45-67
          </a>

          <a href="tel:+1 (800) 123-45-67" className="hover:underline">
            <LocalShippingIcon />
            Opening hours 9 a.m. - 6 p.m.
          </a>
          <Link to="/about" className="text-lg mr-2 hover:underline">
            À propos de nous
          </Link>
        </Box>
        <Toolbar>
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <SideBar />
              <Link to="/">LOGO</Link>
              <Link to="/tariffs" className="text-lg mx-2 hover:underline ">
                Tarifs
              </Link>
            </div>
            <div>Bienvenue dans notre magasin</div>

            <div>
              <Link to="/login" className="text-lg mr-2 hover:underline ">
                Se connecter
              </Link>
              <Link to="/register" className="text-lg mr-2 hover:underline ">
                S'inscrire
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
