import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ background: "#000000", padding: "20px" }}>
      <Typography variant="h6" sx={{ color: "#ffffff" }}>
        Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257)
        563-7401
      </Typography>
      <Typography variant="h6" sx={{ color: "#ffffff" }}>
        9:00 AM - 7:00 PM
      </Typography>
      <Typography variant="h6" sx={{ color: "#ffffff" }}>
        xyz@gmail.com
      </Typography>
    </Box>
  );
};

export default Footer;
