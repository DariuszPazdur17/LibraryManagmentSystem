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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default News;
