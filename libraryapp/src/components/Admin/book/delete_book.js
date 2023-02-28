import { Typography, Button } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import fire from "../../../files/firebase";
import Adminappbar from "../../navbar/admin";

export const Deletebook = () => {
  const [bookdata, setdata] = useState([]);
  useEffect(() => {
    fire.firestore().collection("books").get().then(snapshot =>
      snapshot.forEach(ele => {
        var data = ele.data();
        setdata(arr => [...arr, data]);
        console.log(data);
      })
    );
  }, []);

  return (
    <Box sx={{ background: "#3FA34D66", position: "relative" }}>
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
                  src={data.imageurl}
                />
                <Box sx={{ width: "50%" }}>
                  <Button
                    variant="contained"
                    sx={{ float: { lg: "right", md: "right" } }}
                    onClick={() => {
                      fire
                        .firestore()
                        .collection("books")
                        .where("id", "==", data.id)
                        .get()
                        .then(snapshot => {
                          snapshot.forEach(ele => {
                            var key = ele.id;
                            fire
                              .firestore()
                              .collection("books")
                              .doc(key)
                              .delete()
                              .then(() => {
                                window.location.reload(true);
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
        : <Box>
            <Typography>No Books In Library</Typography>{" "}
          </Box>}
    </Box>
  );
};
