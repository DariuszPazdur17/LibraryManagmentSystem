import { Typography, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import Userappbar from "../navbar/user";
import {fire} from "../../files/firebase";
import { useSelector } from "react-redux";
import useCollection from "../../useCollection";
export const Yourbooks = () => {
  // const [bookdata, setdata] = useState([]);
  const user = useSelector(state => state.user.value);


  const {documents: bookdata} = useCollection("book-request")
  // useEffect(() => {
  //   fire
  //     .firestore()
  //     .collection("book-requests")
  //     .where("email", "==", user.email)
  //     .get()
  //     .then(snapshot =>
  //       snapshot.forEach(ele => {
  //         var data = ele.data();
  //         setdata(arr => [...arr, data]);
  //         console.log(data);
  //       })
  //     );
  // }, []);

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
                    {data.bookstatus === "extended" ||
                    data.requeststatus === "pending"
                      ? ""
                      : <Button
                          variant="contained"
                          sx={{ float: { lg: "right", md: "right" }, mr: 1 }}
                          onClick={() => {
                            Date.prototype.addDays = function(days) {
                              const date = new Date(this.valueOf());
                              date.setDate(date.getDate() + days);
                              return date;
                            };
                            const date = new Date(data.returndate);
                            var newdate = date.addDays(7);
                            fire
                              .firestore()
                              .collection("book-requests")
                              .where("id", "==", data.id)
                              .where("email", "==", user.email)
                              .get()
                              .then(snapshot => {
                                snapshot.forEach(ele => {
                                  var key = ele.id;
                                  fire
                                    .firestore()
                                    .collection("book-requests")
                                    .doc(key)
                                    .update({
                                      returndate: newdate.toString(),
                                      bookstatus: "extended"
                                    });
                                });
                                alert("updated");
                              });
                          }}
                        >
                          Extend
                        </Button>}
                    <Button
                      variant="contained"
                      sx={{ float: { lg: "right", md: "right" }, mr: 1 }}
                      onClick={() => {
                        fire
                          .firestore()
                          .collection("book-requests")
                          .where("id", "==", data.id)
                          .where("email", "==", user.email)
                          .get()
                          .then(snapshot => {
                            snapshot.forEach(ele => {
                              var key = ele.id;
                              fire
                                .firestore()
                                .collection("book-requests")
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
                      <Typography variant="h6">
                        {data.requeststatus}
                      </Typography>
                      <Typography variant="h6">
                        {data.returndate}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              );
            })
          : <Box sx={{ height: "100vh" }}>
              <Typography>No Books In Library</Typography>{" "}
            </Box>}
      </Box>
    </Box>
  );
};
