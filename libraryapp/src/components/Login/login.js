import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import fire from "../../files/firebase";
import HomeappBar from "../navbar/Home";
import { getUserData } from "../reducers/user";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else {
      fire
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .where("password", "==", password)
        .get()
        .then(snapshot => {
          if (snapshot.docs.length == 0) {
            alert("user not found");
          } else {
            snapshot.forEach(ele => {
              var data = ele.data();
              console.log(data);

              dispatch(
                getUserData({
                  email: data.email,
                  password: data.password,
                  indexnumber: data.indexnumber
                })
              );
              navigate("/userpage");
            });
          }
        })
        .catch(err => {
          alert(err);
        });
    }
  };
  return (
    <Box sx={{ backgroundColor: "#3FA34D6B", height: "100vh" }}>
      <HomeappBar />

      <Container sx={{ backgroundColor: "#FFFFFF", dispay: "flex" }}>
        <Stack sx={{ mt: 5, padding: "40px 10px 10px 10px" }} spacing={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" },
              width: "fit-content",
              marginLeft: "auto"
            }}
            onClick={() => navigate("/adminlogin")}
          >
            Login As Admin
          </Button>
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
              type="password"
              fullWidth
              label="Password"
              id="fullWidth"
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
            <Typography variant="h6" sx={{ marginBottom: "5px" }}>
              If you don't have a account
            </Typography>
            <Box sx={{ margin: "auto" }}>
              {" "}<Button
                variant="contained"
                onClick={() => navigate("/signup")}
                sx={{
                  backgroundColor: "#000000",
                  borderRadius: "50px",
                  "&:hover": { backgroundColor: "#000000" },
                  justifyContent: "center",
                  width: "fit-content"
                }}
              >
                Click here to register
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
