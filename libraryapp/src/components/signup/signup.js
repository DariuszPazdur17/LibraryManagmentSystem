import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../../files/firebase";
import HomeappBar from "../navbar/Home";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [indexnumber, setindexnumber] = useState("");

  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      email === "" ||
      password === "" ||
      confirmpassword === "" ||
      indexnumber === ""
    ) {
      alert("please fill all details");
    } else if (password != confirmpassword) {
      alert("password not matched !");
    } else {
      fire.auth().createUserWithEmailAndPassword(email, password).then(() => {
        fire
          .firestore()
          .collection("users")
          .add({
            email: email,
            password: password,
            indexnumber: indexnumber
          })
          .then(() => {
            alert("Account created successfully");
            navigate("/login");
          });
      });
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
              type="password"
              id="fullWidth"
              value={password}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setpassword(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Confirm Password
            </Typography>
            <TextField
              fullWidth
              label="Confirm Password"
              id="fullWidth"
              type="password"
              value={confirmpassword}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setconfirmpassword(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Index Number
            </Typography>
            <TextField
              fullWidth
              label="Index Number"
              id="fullWidth"
              value={indexnumber}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setindexnumber(e.target.value)}
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
                Register
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Signup;
