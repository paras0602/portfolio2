import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { animateScroll as scroll } from "react-scroll";
import ListItemIcon from "@mui/material/ListItemIcon";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";

export default function Drawercomp({ pages, state, setState }) {
  const ListIconsarr = [
    AiOutlineHome,
    BsFillFilePersonFill,
    GiSkills,
    GrProjects,
    MailIcon,
  ];
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page, index) => {
          const Icons = ListIconsarr[index];
          return (
            <ListItem
              button
              onClick={() => {
                if (index === 0) scroll.scrollToTop();
                else if (index === 1) scroll.scrollTo(600);
                else if (index === 2) scroll.scrollTo(1200);
                else if (index === 3) scroll.scrollTo(3000);
                else scroll.scrollToBottom();
              }}
              key={page}
            >
              <ListItemIcon>
                <Icons />
              </ListItemIcon>
              <ListItemText primary={page} />
            </ListItem>
          );
        })}
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer open={state ? true : false} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
