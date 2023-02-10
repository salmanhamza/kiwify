import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Attatchments = () => {
  return (
    <Box
      style={{
        display: "flex",
        border: "1px solid #d2d3dc",
        borderRadius: 10,
        overflow: "hidden",
        height: 70,
        width: 300,
      }}
    >
      <Box
        style={{
          background: "#d71f69",
          display: "flex",
          justifyContent: "center ",
          alignItems: "center",
          width: "25%",
        }}
      >
        <Typography>type</Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Typography>name</Typography>
        <Typography>size</Typography>
      </Box>
    </Box>
  );
};

export default Attatchments;
