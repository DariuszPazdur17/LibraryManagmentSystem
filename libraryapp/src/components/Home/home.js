import { Box } from "@mui/system";
import React from "react";
import Footer from "../Footer/footer";
import HomeappBar from "../navbar/Home";
import News from "../News/news";

const Homepage = () => {
  return (
    <Box sx={{ background: "#3FA34D6B", height: "100vh" }}>
      <HomeappBar />
      <News />
    </Box>
  );
};

export default Homepage;
