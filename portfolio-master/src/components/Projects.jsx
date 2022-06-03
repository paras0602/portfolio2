import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
import data from "../Data/projectsData";
function Projects() {
  return (
    <div className="projects">
      <Typography
        textAlign={"center"}
        variant="h3"
        sx={{ marginBottom: "10%", color: "white" }}
      >
        Projects
      </Typography>
      <Grid container spacing={5}>
        {data.map((el) => {
          return (
            <React.Fragment key={el.heading}>
              <ProjectsCard
                image={el.image}
                heading={el.heading}
                about={el.about}
                github={el.Github}
                live={el.live}
                stack={el.techStack}
                video={el.video}
              />
            </React.Fragment>
          );
        })}
      </Grid>
    </div>
  );
}

export default Projects;
