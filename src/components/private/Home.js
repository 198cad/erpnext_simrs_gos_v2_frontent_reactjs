import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, CardMedia } from "@material-ui/core";
import { HotelOutlined, AccessibilityNewRounded } from "@material-ui/icons";
import Image from "material-ui-image";

const useStyles = makeStyles({
  root: {},
  sideMenu: {
    position: "fixed",
    top: "0px",
    bottom: "0px",
    left: "0px",
    width: "200px",
    backgroundColor: "#222831",
  },
  menuItem: {
    width: "200px",
    height: "50px",
    backgroundColor: "#222831",
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "#686d76 !important",
    },
  },
  body: {
    backgroundColor: "red",
    width: "100%",
    marginLeft: "200px",
  },
  logo: {
    // margin: "20px",
  },
  logoImage: {
    height: "10px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.sideMenu}>
        <Image aspectRatio={8 / 2} src={require("./images/logo.png")} />
        <List component="nav">
          <ListItem className={classes.menuItem} button>
            <AccessibilityNewRounded fontSize="large" style={{ marginRight: "17px", color: "#f4f4f4" }} />
            <span style={{ fontSize: "18px", color: "#f4f4f4" }}>Pasien</span>
          </ListItem>
          <ListItem className={classes.menuItem} button>
            <HotelOutlined />
            Apotek
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default Home;
