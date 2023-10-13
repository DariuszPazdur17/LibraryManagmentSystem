import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {fire} from "../../files/firebase";
import { useSelector } from "react-redux";
import Userappbar from "../navbar/user";

const Requestbook = () => {
  const navigate = useNavigate();
  const book = useSelector(state => state.book.value);
  const user = useSelector(state => state.user.value);
  const [returndate, setreturndate] = useState("");
  return (
    <Box sx={{ height: "100vh" }}>
      <Userappbar />

      <Stack
        sx={{
          display: { lg: "flex", md: "flex" },
          flexDirection: { lg: "row", md: "row" },
          alignItems: "center",
          gap: "20px",
          justifyContent: "space-evenly",
          margin: { lg: "10px 100px", sm: "10px", xs: "10px" },
          background: "#ffffff",
          padding: "20px"
        }}
      >
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: "auto", md: "auto" }
          }}
          alt="The house from the offer."
          src={book.imageurl}
        />
        <Box sx={{ width: "50%" }}>
          <Stack spacing={3}>
            <TextField
              type="date"
              value={returndate}
              onChange={e => setreturndate(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ float: { lg: "right", md: "right" }, mr: 1 }}
              onClick={() => {
                fire
                  .firestore()
                  .collection("book-requests")
                  .add({
                    id: book.id,
                    imageurl: book.imageurl,
                    title: book.title,
                    author: book.author,
                    description: book.description,
                    email: user.email,
                    returndate: returndate,
                    requeststatus: "pending",
                    bookstatus: "pending"
                  })
                  .then(() => {
                    alert("Request sent successfully");
                    navigate("/yourbooks");
                  });
              }}
            >
              Book
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Requestbook;
