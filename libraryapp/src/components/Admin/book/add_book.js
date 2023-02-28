import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../../../files/firebase";
import Adminappbar from "../../navbar/admin";

const Addbook = () => {
  const [bookid, setbookid] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [description, setdescription] = useState("");

  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      bookid === "" ||
      imageurl === "" ||
      title === "" ||
      author === "" ||
      description === ""
    ) {
      alert("please enter email and password");
    } else {
      fire
        .firestore()
        .collection("books")
        .add({
          id: bookid,
          imageurl: imageurl,
          title: title,
          author: author,
          description: description
        })
        .then(() => {
          navigate("/deletebook");
        });
    }
  };
  return (
    <Box sx={{ backgroundColor: "#3FA34D6B" }}>
      <Adminappbar />
      <Container sx={{ backgroundColor: "#FFFFFF", dispay: "flex" }}>
        <Stack sx={{ mt: 5, padding: "40px 10px 10px 10px" }} spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Book Id
            </Typography>
            <TextField
              fullWidth
              label="Book Id"
              id="fullWidth"
              value={bookid}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setbookid(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Image Url
            </Typography>
            <TextField
              fullWidth
              label="Image Url"
              id="fullWidth"
              value={imageurl}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setimageurl(e.target.value)}
            />
          </Stack>
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
              Description
            </Typography>
            <TextField
              fullWidth
              label="Description"
              id="fullWidth"
              value={description}
              sx={{ background: "#3FA34D6B" }}
              onChange={e => setdescription(e.target.value)}
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
                Save
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Addbook;
