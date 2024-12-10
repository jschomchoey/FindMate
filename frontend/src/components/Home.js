import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        background: "linear-gradient(to bottom, #17ca9e 0%, #ffffff 100%)",
        color: "white",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to FindMate!
      </Typography>
      <Typography variant="h6" paragraph>
        Connect with your connections and create new memories. Log in or register to explore!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          borderRadius: 8,
          margin: 1,
        }}
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          borderRadius: 8,
          margin: 1,
        }}
        onClick={() => navigate("/register")}
      >
        Register
      </Button>
    </Box>
  );
};

export default Home;
