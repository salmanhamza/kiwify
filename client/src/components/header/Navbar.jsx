import React from "react";
import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
const RightSideBar = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const percentage = 50;

function Navbar() {
  return (
    <AppBar style={{ background: "#f39c19" }}>
      <Toolbar>
        <Container>
          <Typography style={{ fontWeight: 500, fontSize: 20 }}>
            Kiwify Members Area
          </Typography>
          <RightSideBar>
            <Box style={{ width: 40, height: 40, marginRight: 10 }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={8}
                styles={buildStyles({
                  textSize: "36px",
                  textColor: "#fff",
                  trailColor: "#f9c482",
                  pathColor: "#fff",
                })}
              />
            </Box>

            <AccountCircleIcon style={{ fontSize: 46 }} />
          </RightSideBar>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
