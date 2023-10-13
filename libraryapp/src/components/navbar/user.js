import { Button, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fire} from "../../files/firebase";
import Logo from "../../images/logo.png";
import { getSearchData } from "../reducers/search";

const Userappbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchtext, setsearchtext] = useState("");
  const user = useSelector(state => state.user.value);
  return (
    <Stack sx={{ background: "#D9D9D9" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          flexWrap: "wrap",
          background: "#D9D9D9"
        }}
      >
        <Box sx={{ margin: { xs: "auto", lg: "0px" } }}>
          <img src={Logo} width="98px" height="99px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            paddingInline: "10px"
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/userpage")}
          >
            Home
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/favourites")}
          >
            Cart
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/yourbooks")}
          >
            My Books
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/searchhistory")}
          >
            Search History
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => {
              fire
                .firestore()
                .collection("search-history")
                .where("email", "==", user.email)
                .get()
                .then(snapshot => {
                  snapshot.forEach(ele => {
                    var key = ele.id;
                    fire
                      .firestore()
                      .collection("search-history")
                      .doc(key)
                      .delete()
                      .then(() => {
                        alert("History cleared");
                      });
                  });
                });
            }}
          >
            Clear Session
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#000000" }
            }}
            onClick={() => navigate("/")}
          >
            Logout
          </Button>
        </Box>
        <Box sx={{ margin: { xs: "auto", lg: "0px" } }}>
          <img src={Logo} width="98px" height="99px" />
        </Box>
      </Box>
      <Stack spacing={2} sx={{ width: { lg: "40%" }, margin: "auto" }}>
        <TextField
          fullWidth
          label="Search book..."
          id="fullWidth"
          value={searchtext}
          onChange={e => setsearchtext(e.target.value)}
        />
        {/* <Typography variant="h6" onClick={() => navigate("/advancedsearch")}>
          Advanced Search
        </Typography> */}
        <Button
          variant="contained"
          onClick={() => {
            if (searchtext ==="") {
              alert("please enter search text");
              dispatch(
                getSearchData({
                  searchtext: searchtext
                })
              );
            } else {
              fire
                .firestore()
                .collection("search-history")
                .add({
                  searchtext: searchtext,
                  email: user.email
                })
                .then(() => {
                  dispatch(
                    getSearchData({
                      searchtext: searchtext
                    })
                  );
                });
            }
          }}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
};

export default Userappbar;
