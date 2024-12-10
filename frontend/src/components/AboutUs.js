import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          textAlign: "center",
          backgroundColor: "#e0f7fa",
        }}
      >
        <Typography variant="h5">About Us</Typography>
      </Box>
    </>
  );
};

export default AboutUs;
