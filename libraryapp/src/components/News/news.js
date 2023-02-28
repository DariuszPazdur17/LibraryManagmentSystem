import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import news from "../../images/news.png";

const News = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        mt: 1,
        background: "#ffffff",
        margin: { lg: "40px 100px" }
      }}
    >
      <Typography variant="h5">NEWS !!!</Typography>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box sx={{ maxWidth: { lg: "50%" } }}>
          <img src={news} />
        </Box>
        <Box sx={{ maxWidth: { lg: "50%" }, padding: "10px" }}>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
           Simply text here
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default News;
