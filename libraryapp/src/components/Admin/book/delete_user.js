import { Typography, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import {fire} from "../../../files/firebase";
import Adminappbar from "../../navbar/admin";

export const Deleteuser = () => {
  const [bookdata, setdata] = useState([]);
  useEffect(() => {
    fire.firestore().collection("users").get().then(snapshot =>
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
              <Stack>
                <Box
                  sx={{
                    margin: "auto",
                    margin: "10px",
                    background: "#ffffff",
                    padding: "20px"
                  }}
                >
                  <Stack spacing={3}>
                    <Typography variant="h6">
                      Email: {data.email}
                    </Typography>
                    <Typography variant="h6">
                      Index Number: {data.indexnumber}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ float: { lg: "right", md: "right" } }}
                      onClick={() => {
                        fire
                          .firestore()
                          .collection("users")
                          .where("email", "==", data.email)
                          .get()
                          .then(snapshot => {
                            snapshot.forEach(ele => {
                              var key = ele.id;
                              fire
                                .firestore()
                                .collection("users")
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
                  </Stack>
                </Box>
              </Stack>
            );
          })
        : <Box>
            <Typography>No Users In Library</Typography>{" "}
          </Box>}
    </Box>
  );
};
