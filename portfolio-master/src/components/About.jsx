import React from "react";
// import styles from "../styles/about.module.css";
import "../styles/about.scss";
import InlineSVG from "svg-inline-react";
import { Box } from "@mui/system";
import Aboutanim from "./Aboutanim";
import { Typography } from "@mui/material";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineSendToMobile } from "react-icons/md";
import { Button } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub, AiFillFileText } from "react-icons/ai";
function About() {
  const svg1 = `<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
  <defs>
      <path id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
  </defs>
  <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
      <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
      <use xlink:href="#gentle-wave" x="48" y="7" fill="#000000" />
  </g>
</svg>`;
  return (
    <div className="header about">
      <Box
        sx={{
          width: "90%",
          margin: 0,
          padding: 0,
          padding: "5%",
          paddingRight: 0,
          paddingBottom: 0,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          //marginBottom: "50px",
        }}
      >
        {/* all About Content goes here */}
        <div style={{ height: "366px" }}>
          <img
            src="my-pic2.png"
            alt="My Picture"
            style={{ maxWidth: "366px", width: "90vw" }}
          />
        </div>
        <div className="about-me2">
          <Typography variant="h4">Paras Jain</Typography>
          <Aboutanim />
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            <ImLocation2 /> Paschim Vihar, Delhi
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            <MdOutlineSendToMobile /> +91 9319348133
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            I am a passionate full stack developer skilled in MERN Stack guided
            by Masai School. I am looking for opportunity to apply my knowledge
            and skills to be a valuable assets for organization and a better
            version of myself.
          </Typography>
          <div style={{ marginTop: "5%" }}>
            <a target={"_blank"} href="https://github.com/paras0602">
              <Button
                variant="contained"
                startIcon={<AiFillGithub />}
                sx={{
                  background: `linear-gradient(
                60deg,
                rgba(84, 58, 183, 1) 0%,
                rgba(0, 172, 193, 1) 100%
              )`,
                }}
              >
                Github
              </Button>
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/paras060\/"
            >
              <Button
                variant="contained"
                startIcon={<FaLinkedin />}
                sx={{
                  marginX: 2,
                  background: `linear-gradient(
                60deg,
                rgba(84, 58, 183, 1) 0%,
                rgba(0, 172, 193, 1) 100%
              )`,
                }}
              >
                Linkdin
              </Button>
            </a>
            <a
              target={"_blank"}
              href="https://drive.google.com/file/d/1lyLJLBXFmFf2ooIvfoROH1tMg2kbo6b5/view?usp=sharing"
            >
              <Button
                variant="contained"
                startIcon={<AiFillFileText />}
                sx={{
                  background: `linear-gradient(
                60deg,
                rgba(84, 58, 183, 1) 0%,
                rgba(0, 172, 193, 1) 100%
              )`,
                  mt: { xs: 2, md: 0, lg: 0 },
                }}
              >
                Resume
              </Button>
            </a>
          </div>
        </div>
      </Box>
      <div>
        <InlineSVG src={svg1} />
      </div>
    </div>
  );
}

export default About;
