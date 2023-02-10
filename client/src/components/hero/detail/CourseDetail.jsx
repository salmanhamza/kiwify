import { Typography, Box, styled } from "@mui/material";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import { modules } from "../../../../data";
import { courseDetails } from "../../../../data";
import Attatchments from "./Attatchments";

const CourseTitle = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: 16,
  borderBottom: "1px solid #d2d6dc",
});

function CourseDetail() {
  return (
    <Box style={{ borderBottom: "1px solid #d2d6dc" }}>
      <CourseTitle>
        <Box>
          <Typography style={{ color: "#3d556e", textTransform: "uppercase" }}>
            {modules[0].module}
          </Typography>
          <Typography style={{ fontWeight: 400, fontSize: 20 }}>
            {modules[0].chapters[1].chapter}
          </Typography>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Rating name="no-value" value={null} />
          <Box ml={5}>
            <Button
              style={{
                color: "#000",
                backgroundColor: "#fff",
                border: "0.5px solid #d2d3dc",
                height: 45,
              }}
              variant="outlined"
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              style={{
                color: "#d2d3dc",
                backgroundColor: "#f9fafb",
                border: "0.5px solid #d2d3dc",
                height: 45,
              }}
              variant="outlined"
            >
              <ChevronRightIcon />
            </Button>
          </Box>
        </Box>
      </CourseTitle>
      <Box m={4}>
        <Typography paddingBottom={2} style={{ fontWeight: 500 }}>
          {courseDetails[0].heading}
        </Typography>
        <Typography paddingBottom={2} style={{ textIndent: 30, lineHeight: 2 }}>
          {courseDetails[0].subHeading}
        </Typography>
        <Typography style={{ textIndent: 20, lineHeight: 2 }}>
          {courseDetails[0].description}
        </Typography>
        <Box>
          <Typography>Attatchments</Typography>
          <Attatchments />
        </Box>
      </Box>
    </Box>
  );
}

export default CourseDetail;
