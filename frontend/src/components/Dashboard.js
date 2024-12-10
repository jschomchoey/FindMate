import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "./Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          backgroundColor: "#f0f4f8",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to the Dashboard!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: 8,
            mt: 3,
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Dashboard;
