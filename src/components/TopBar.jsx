import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useStyles } from "../styles";

const TopBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      className={isHome ? classes.appBarHome : classes.appBar}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textTransform: "uppercase" }}
        >
          Shopping List
        </Typography>
        {!isHome && (
          <Link to="/">
            <LastPageIcon className={classes.icon} />
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
