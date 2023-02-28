import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";

const Homeappbar = () => {
  const navigate = useNavigate();
  return (
    <Stack sx={{ background: "#D9D9D9" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          flexWrap: "wrap",
          background: "#D9D9D9"
        }}
      >
        <Box sx={{ margin: { xs: "auto", lg: "0px" } }}>
          <img src={Logo} width="98px" height="99px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            paddingInline: "10px"
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
        <Box sx={{ margin: { xs: "auto", lg: "0px" } }}>
          <img src={Logo} width="98px" height="99px" />
        </Box>
      </Box>
    </Stack>
  );
};

export default Homeappbar;
