import { Box } from "@mui/material";
import ReactPlayer from "react-player";
import React from "react";

function VideoPlayer() {
  return (
    <Box style={{ height: "85vh" }} bgcolor="purple">
      <ReactPlayer
        width="100%"
        height="100%"
        url={"https://youtu.be/_uQrJ0TkZlc"}
      />
    </Box>
  );
}

export default VideoPlayer;
