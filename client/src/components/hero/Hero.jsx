import { Box, Stack, styled } from "@mui/material";
import React from "react";
import CourseDetail from "./detail/CourseDetail";
import RightSideBar from "./rightbar/RightSideBar";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import Footer from "./../footer/Footer";

function Hero({ module }) {
  return (
    <Stack direction="row" style={{ marginTop: 64 }}>
      <Box
        flex={9}
        style={{
          borderRight: "1px solid #d2d6dc",
        }}
      >
        <VideoPlayer />
        <CourseDetail module={module} />
        <Footer />
      </Box>
      <RightSideBar style={{ position: "sticky", top: 0 }} />
    </Stack>
  );
}

export default Hero;
