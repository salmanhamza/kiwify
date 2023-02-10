import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/footer-kiwify-gray.png";
import CopyrightIcon from "@mui/icons-material/Copyright";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const footer = () => {
  return (
    <Box
      ml={10}
      mr={10}
      paddingTop={2}
      paddingBottom={2}
      style={{
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img style={{ width: "6rem" }} src={logo} alt="logo" srcset="" />
        <Typography
          style={{
            color: "gray",
            fontWeight: 400,
            fontSize: 14,
            marginLeft: 18,
          }}
        >
          Copyright &nbsp;
          <CopyrightIcon
            style={{
              fontWeight: 400,
              fontSize: 14,
              verticalAlign: -2.7,
            }}
          />
          &nbsp; 2021 Kiwify.
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          color: "gray",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontWeight: 400, fontSize: 14, marginLeft: 18 }}>
          My Courses
        </Typography>
        <Typography style={{ fontWeight: 400, fontSize: 14, marginLeft: 18 }}>
          Help & Support
        </Typography>
        <Typography style={{ fontWeight: 400, fontSize: 14, marginLeft: 18 }}>
          <CompareArrowsIcon style={{ verticalAlign: -6.5 }} />
          &nbsp; Switch to Producer Dashboard
        </Typography>
      </Box>
    </Box>
  );
};

export default footer;
