import { Typography, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import Userappbar from "../navbar/user";
import fire from "../../files/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Adminappbar from "../navbar/admin";
export const Viewrequests = () => {
  const [bookdata, setdata] = useState([]);
  const user = useSelector(state => state.user.value);
  const navigate = useNavigate();
  useEffect(() => {
    fire
      .firestore()
      .collection("book-requests")
      .where("requeststatus", "==", "pending")
      .get()
      .then(snapshot =>
        snapshot.forEach(ele => {
          console.log(ele);
          var data = { id: ele.id, data: ele.data() };
          setdata(arr => [...arr, data]);
          console.log(data);
        })
      );
  }, []);

  return (
    <Box
      sx={{ background: "#3FA34D66", position: "relative", height: "100vh" }}
    >
      <Adminappbar />
      {bookdata != ""
        ? bookdata.map((data, index) => {
            return (
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
                  src={data.data.imageurl}
                />
                <Box sx={{ width: "50%" }}>
                  <Button
                    variant="contained"
                    sx={{ float: { lg: "right", md: "right" } }}
                    onClick={() => {
                      fire
                        .firestore()
                        .collection("book-requests")
                        .doc(data.id)
                        .update({ requeststatus: "rejected" })
                        .then(() => {
                          window.location.reload(true);
                        });
                    }}
                  >
                    Reject
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ float: { lg: "right", md: "right" }, mr: 1 }}
                    onClick={() => {
                      fire
                        .firestore()
                        .collection("book-requests")
                        .doc(data.id)
                        .update({ requeststatus: "accepted" })
                        .then(res => {
                          window.location.reload(true);
                        });
                    }}
                  >
                    Accept
                  </Button>
                  <Stack spacing={3}>
                    <Typography variant="h6">
                      {data.data.id}
                    </Typography>
                    <Typography variant="h6">
                      {data.data.title}
                    </Typography>
                    <Typography variant="h6">
                      {data.data.author}
                    </Typography>
                    <Typography variant="h6">
                      {data.data.description}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            );
          })
        : <Box>
            <Typography>No Requests yet.</Typography>{" "}
          </Box>}
    </Box>
  );
};
