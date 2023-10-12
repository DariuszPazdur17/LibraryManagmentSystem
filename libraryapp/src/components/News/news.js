import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import B5 from "../../images/B5.jpg";

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
      <Typography variant="h3" >Library Of Faculty of Metals Engineering and Industrial Computer Science</Typography>
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
          <img src={B5} alt="Library bulding" style={{ width: "20vw", maxWidth: "100%", marginTop: "20px" }} />
        </Box>
        <Box sx={{ maxWidth: { lg: "50%" }, padding: "10px" }}>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            <h5>Welcome to Our University Library!</h5>

                At our university library, knowledge knows no bounds. Step into a world where every page turned is a new adventure,
                where the rustle of paper and the faint hum of ideas intermingle in a symphony of learning. Our library isn't just 
                a repository of books; it's a sanctuary for curious minds, a haven for passionate explorers, and a hub of intellectual exchange.

            <h5>Discover Limitless Horizons:</h5>
                Here, you'll find a treasure trove of knowledge spanning countless subjects 
                - from ancient history to cutting-edge technology, from timeless classics to groundbreaking research. 
                Our shelves are adorned with books that inspire, educate, and transport you to different worlds. 
                Whether you're delving into the mysteries of the cosmos, unraveling the threads of history, 
                or diving deep into the realms of fiction, our library offers a boundless array of literary delights.
{/* 
            <h5>A Hub of Creativity:</h5>
                Beyond the pages, our library pulsates with creativity. It's a place where students huddle over
                laptops, typing out the next great novel or crafting innovative solutions to real-world problems. 
                Discussions echo through the air, and collaborative projects come to life. Here, inspiration flows 
                as freely as the ink on the pages of a novel, and ideas take flight, reaching heights unimagined. */}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default News;
