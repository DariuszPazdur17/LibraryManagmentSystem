import { Typography, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import Userappbar from "../navbar/user";
import fire from "../../files/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookData } from "../reducers/book";
export const Viewbook = () => {
  const [bookdata, setdata] = useState([]);
  const user = useSelector(state => state.user.value);
  const navigate = useNavigate();
  const search = useSelector(state => state.search.value);
  const dispatch = useDispatch();
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
      <Userappbar />
      {search.searchtext == ""
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
                        .collection("favourites")
                        .add({
                          id: data.id,
                          imageurl: data.imageurl,
                          title: data.title,
                          author: data.author,
                          description: data.description,
                          email: user.email
                        })
                        .then(() => {
                          alert("Added to favourites");
                          navigate("/favourites");
                        });
                    }}
                  >
                    Cart
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ float: { lg: "right", md: "right" }, mr: 1 }}
                    onClick={() => {
                      dispatch(
                        getBookData({
                          id: data.id,
                          imageurl: data.imageurl,
                          title: data.title,
                          author: data.author,
                          description: data.description,
                          requeststatus: data.requeststatus,
                          bookstatus: data.bookstatus
                        })
                      );
                      navigate("/requestbook");
                    }}
                  >
                    Book
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
        : bookdata
            .filter(val => {
              if (
                val.title
                  .toLowerCase()
                  .includes(search.searchtext.toLowerCase()) ||
                val.id.toLowerCase().includes(search.searchtext.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data, index) => {
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
                          .collection("favourites")
                          .add({
                            id: data.id,
                            imageurl: data.imageurl,
                            title: data.title,
                            author: data.author,
                            description: data.description,
                            email: user.email
                          })
                          .then(() => {
                            alert("Added to favourites");
                            navigate("/favourites");
                          });
                      }}
                    >
                      Cart
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ float: { lg: "right", md: "right" }, mr: 1 }}
                      onClick={() => {
                        navigate("/requestbook");
                      }}
                    >
                      Book
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
            })}
    </Box>
  );
};
