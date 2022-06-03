import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { AiOutlineGithub, AiOutlineVideoCamera } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { Box } from "@mui/system";
function ProjectsCard({ image, heading, about, github, live, stack,video }) {
  return (
    <Grid item xs={12} md={6} lg={6}>
      <div style={{ width: "2px", backgroundColor: "white" }}></div>
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          ":hover": {
            boxShadow: ` 2px 10px 15px 2px #FE6B8B, 
             2px 10px 15px 2px #FF8E53`,
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Nykaa Clone"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Box sx={{ display: "flex", margin: 2 }}>
            {stack.map((El, i) => {
              return (
                <div style={{ marginRight: "4px" }} key={i}>
                  <El size={"1.5rem"} />
                </div>
              );
            })}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            {about}
          </Typography>
          <Box
            sx={{
              width: { xs: "200px", md: "100%" },
              margin: { xs: "auto", md: 0, lg: 0 },
            }}
          >
            <a href={github} target={"_blank"}>
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                }}
                startIcon={<AiOutlineGithub />}
                size="small"
              >
                Github
              </Button>
            </a>
            
            <a href={live} target={"_blank"}>
              <Button
              variant="contained"
              sx={{
                marginRight: { xs: 1, md: 1.5, lg: 2 },
                marginLeft: { xs: 1, md: 1.5, lg: 2 },
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              }}
              startIcon={<CgWebsite />}
              size="small"
            >
                Live
              
            </Button>
            </a>
            
            <a href={video} target={"_blank"}>
              <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                marginTop: { xs: 1.5, md: 0, lg: 0 },
              }}
              startIcon={<AiOutlineVideoCamera />}
              size="small"
            >
                Video
              
            </Button>
            </a>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProjectsCard;
