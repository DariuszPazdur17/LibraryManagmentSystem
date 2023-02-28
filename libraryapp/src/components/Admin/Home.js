import { Container, Stack, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Adminappbar from "../navbar/admin";

const Adminhome = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ background: " #3FA34D6B", height: "100vh" }}>
      <Adminappbar />
      <Container
        sx={{ width: { lg: "50%" }, padding: "70px", background: "#ffffff" }}
      >
        <Stack spacing={7} sx={{ alignItems: "center" }}>
          <Typography>ADMIN PANEL</Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              width: { lg: "30%" },
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/addbook")}
          >
            ADD BOOK
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              width: { lg: "30%" },
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/deletebook")}
          >
            DELETE BOOK
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              width: { lg: "30%" },
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/deleteuser")}
          >
            SEARCH USER
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Adminhome;
