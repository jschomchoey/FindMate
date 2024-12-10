import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#17ca9e",
        borderRadius: "8px 8px 0 0",
        boxShadow: 3,
      }}
    >
      <Toolbar>
        <Button
          color="inherit"
          onClick={handleHomeClick}
          sx={{ borderRadius: "20px", ml: 1 }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/about-us")}
          sx={{ borderRadius: "20px", ml: 1 }}
        >
          About Us
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/donate")}
          sx={{ borderRadius: "20px", ml: 1 }}
        >
          Donate
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
