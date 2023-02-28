import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import HomeappBar from "../navbar/Home";

const Adminlogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else if (email === "admin@gmail.com" && password === "admin") {
      navigate("/adminpage");
    } else {
      alert("invalid email or password");
    }
  };
  return (
    <Box sx={{ backgroundColor: "#3FA34D6B", height: "100vh" }}>
      <HomeappBar />

      <Container sx={{ backgroundColor: "#FFFFFF", dispay: "flex" }}>
        <Stack sx={{ mt: 5, padding: "40px 10px 10px 10px" }} spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Email
            </Typography>
            <TextField
              fullWidth
              label="xyz@gmail.com"
              id="fullWidth"
              value={email}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setemail(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Password
            </Typography>
            <TextField
              fullWidth
              label="Password"
              id="fullWidth"
              type="password"
              value={password}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setpassword(e.target.value)}
            />
          </Stack>
          <Box>
            <Box sx={{ margin: "auto" }}>
              {" "}<Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#000000",
                  borderRadius: "50px",
                  "&:hover": { backgroundColor: "#000000" },
                  justifyContent: "center",
                  width: "fit-content",
                  marginBottom: "5px"
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Adminlogin;
