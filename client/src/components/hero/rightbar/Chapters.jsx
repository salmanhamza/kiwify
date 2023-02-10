import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";

import React, { useState } from "react";

function Chapters({ module }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Box
        onClick={toggleMenu}
        style={{
          background: "#f2f3f5",
          borderTop: "1px solid #d2d6dc",
          height: 15,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Typography>{module.module}</Typography>
        <Box style={{ display: "flex" }}>
          {" "}
          <Typography>{module.videos}</Typography>
          {menuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Box>
      </Box>
      {menuOpen && (
        <Box>
          {module.chapters.map((chapter) => {
            if (chapter.chapter) {
              return (
                <Box
                  style={{
                    background: "#fff",
                    borderTop: "1px solid #d2d6dc",
                    height: 15,
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <Checkbox />

                  <Typography>{chapter.chapter}</Typography>
                </Box>
              );
            }
            return (
              <Box
                style={{
                  background: "#fff",
                  borderTop: "1px solid #d2d6dc",
                  height: 15,
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Typography>{chapter.chapter}</Typography>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
}

export default Chapters;
