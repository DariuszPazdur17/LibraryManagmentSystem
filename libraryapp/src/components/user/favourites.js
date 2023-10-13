import { Typography, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import Userappbar from "../navbar/user";
import {fire} from "../../files/firebase";
import { useSelector } from "react-redux";
import useCollection from "../../useCollection";
export const Favourites = () => {
  // const [bookdata, setdata] = useState([]);
  const user = useSelector(state => state.user.value);
  const [state, setstate] = useState(false);

  const {documents: bookdata} = useCollection("book-request")

  return (
    <Box sx={{ background: "#3FA34D66", position: "relative" }}>
      <Userappbar />
      <Box sx={{ height: "100vh" }}>
        {bookdata !== ""
          ? bookdata?.map((data, index) => {
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
                    src={data.imageurl}
                  />
                  <Box sx={{ width: "50%" }}>
                    <Button
                      variant="contained"
                      sx={{ float: { lg: "right", md: "right" }, mr: 1 }}
                      onClick={() => {
                        fire
                          .firestore()
                          .collection("favourites")
                          .where("id", "==", data.id)
                          .where("email", "==", user.email)
                          .get()
                          .then(snapshot => {
                            snapshot.forEach(ele => {
                              var key = ele.id;
                              fire
                                .firestore()
                                .collection("favourites")
                                .doc(key)
                                .delete()
                                .then(() => {
                                  alert("Deleted.");
                                });
                            });
                          });
                      }}
                    >
                      Delete
                    </Button>
                    <Stack spacing={3}>
                      <Typography variant="h6">
                        {data.id}
                      </Typography>
                      <Typography variant="h6">
                        {data.title}
                      </Typography>
                      <Typography variant="h6">
                        {data.author}
                      </Typography>
                      <Typography variant="h6">
                        {data.description}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              );
            })
          : <Box sx={{ height: "100vh" }}>
              <Typography>No Books In Favourites</Typography>{" "}
            </Box>}
      </Box>
    </Box>
  );
};
