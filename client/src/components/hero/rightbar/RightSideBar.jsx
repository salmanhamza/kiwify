import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import Chapters from "./Chapters";
import { getData } from "../../../api/Api";

function RightSideBar() {
  const [module, setModule] = useState([]);
  useEffect(() => {
    getCourseData();
  }, []);

  const getCourseData = async () => {
    let response = await getData();

    console.log(response);
    setModule(response.data);
  };
  return (
    <Box flex={3}>
      <Box
        style={{
          background: "#fff",
          height: 15,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Typography>Classes</Typography>
        <CloseIcon />
      </Box>
      <Box>
        {module.map((module) => {
          if (module.chapters) {
            return (
              <>
                <Chapters module={module} />
              </>
            );
          }
          return (
            <>
              <Box
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
                  <KeyboardArrowDownIcon />
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export default RightSideBar;
