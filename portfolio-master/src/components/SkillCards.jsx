import React, { useState } from "react";
import { Grid } from "@mui/material";
import LightTooltip from "./SkillTooltip";
function SkillCards({ Icon, hover, tooltip }) {
  const [hoverColor, setHoverColor] = useState({
    background: "white",
    color: "",
  });
  return (
    <LightTooltip title={tooltip}>
      <Grid
        item
        xs={5}
        md={3}
        lg={2}
        sx={{
          margin: "0.9% 1.5%",
          backgroundColor: hoverColor.background,
          ":hover": {
            cursor: "pointer",
            boxShadow: ` 2px 5px 10px 2px #0fffc1, 
             2px 10px 10px 2px #7e0fff`,
          },
        }}
        onMouseEnter={() => {
          setHoverColor({ background: "#202020", color: hover });
        }}
        onMouseLeave={() => {
          setHoverColor({
            background: "white",
            color: "",
          });
        }}
        component={"div"}
      >
        <div className={"card skillCube"}>
          <Icon size={"5rem"} color={hoverColor.color} />
        </div>
      </Grid>
    </LightTooltip>
  );
}

export default SkillCards;
