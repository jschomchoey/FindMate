// Login.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Login failed.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 5,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: "16px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            color: "#17ca9e",
          }}
        >
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 2,
          }}
        >
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            required
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            sx={{
              mb: 2,
              borderRadius: "10px",
            }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            required
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            sx={{
              mb: 2,
              borderRadius: "10px",
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#17ca9e",
              borderRadius: "20px",
              p: 1.5,
              "&:hover": {
                backgroundColor: "#148e77",
              },
            }}
          >
            Login
          </Button>
        </Box>
        <Typography
          align="center"
          sx={{
            mt: 2,
            color: "#555",
          }}
        >
          Don't have an account?{" "}
          <span
            style={{
              color: "#17ca9e",
              cursor: "pointer",
            }}
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </Typography>
      </Paper>
      <ToastContainer />
    </Container>
  );
};

export default Login;
