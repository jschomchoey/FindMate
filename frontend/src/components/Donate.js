import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";

const Donate = () => {
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
          backgroundColor: "#c8e6c9",
        }}
      >
        <Typography variant="h5">Donate Page</Typography>
      </Box>
    </>
  );
};

export default Donate;
