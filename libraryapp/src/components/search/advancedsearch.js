import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeappBar from "../navbar/Home";

const Advancedsearch = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [year, setyear] = useState("");
  const [phrase, setphrase] = useState("");

  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (title === "" || author === "" || year === "" || phrase === "") {
      alert("please enter email and password");
    } else {
    }
  };
  return (
    <Box sx={{ backgroundColor: "#3FA34D6B" }}>
      <HomeappBar />
      <Container sx={{ backgroundColor: "#FFFFFF", dispay: "flex" }}>
        <Stack sx={{ mt: 5, padding: "40px 10px 10px 10px" }} spacing={4}>
          <Typography variant="h5">Advanced Search</Typography>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Title
            </Typography>
            <TextField
              fullWidth
              label="Title"
              id="fullWidth"
              value={title}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => settitle(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Author
            </Typography>
            <TextField
              fullWidth
              label="Author"
              id="fullWidth"
              value={author}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setauthor(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Year
            </Typography>
            <TextField
              fullWidth
              label="Year"
              id="fullWidth"
              value={year}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setyear(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Phrase
            </Typography>
            <TextField
              fullWidth
              label="Phrase"
              id="fullWidth"
              value={phrase}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setphrase(e.target.value)}
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
                Search
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Advancedsearch;
