import React from "react";
import TypewriterComponent from "typewriter-effect";
import Computer from "./Computer";
import { Box } from "@mui/system";
import Background from "./Background";
function Home() {
  return (
    <>
      <Box
        className="home"
        sx={{
          height: "80vh",
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
        }}
      >
        {window.screen.width > 600 ? <Background /> : <></>}
        <Computer />
        <Box
          sx={{
            // border: "1px solid red",
            boxSizing: "border-box",
            paddingTop: "5%",
            marginX: { xs: "auto", md: 0 },
          }}
        >
          <h1 className="name">
            <TypewriterComponent
              onInit={(type) => {
                type.typeString("Hi 👋 I'm Paras Jain").start();
              }}
            />
          </h1>
          <h3 className="description" style={{ margin: "3% 0px" }}>
            <TypewriterComponent
              options={{
                strings: [
                  "A Software Engineer",
                  "A Problem Solver",
                  "A Full Stack Developer",
                ],
                pauseFor: 1500,
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </Box>
      </Box>
    </>
  );
}

export default Home;
