import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Button,
  Popover,
  Typography,
  Avatar,
} from "@mui/material";
import { Drawer, DialogTitle, ModalClose } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import "../App.css";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logout, token } = useAuth();
  
  // const handleClose = () => {
  //   setLoginOpen(false);
  // };

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open1 = Boolean(anchorEl);
  const id = open1 ? "simple-popover" : undefined;
  return (
    <React.Fragment>
      <AppBar color="secondary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </Button>
            <Drawer
              open={open}
              onClose={() => setOpen(false)}
              PaperProps={{ sx: { backgroundColor: "#fff", width: "250px" } }}
            >
              <ModalClose />

              <Box
                sx={{
                  backgroundColor: "purple",
                  color: "white",
                  height: "100vh",
                }}
              >
                <DialogTitle sx={{ margin: "10px" }}>DASHBOARD</DialogTitle>
                <List>
                  {[
                    "Appbar",
                    "Blog",
                    "AboutUs",
                    "ContactUs",
                    "Axios",
                    "AxiosGrid",
                    "AxiosPost",
                  ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton component={Link} to={`/${text}`}>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
          {token ? (
            <Button color="inherit" onClick={logout}>
              Logout
             </Button>
          ) : ( 

          <Link to="/Login" style={{ color: "inherit" }}>
            <div>
              <Button
                aria-describedby={id}
               color="inherit"
                onClick={handleClick1}
                sx={{ marginLeft: "auto" }}
                startIcon={
                  <Avatar
                    src={
                      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                    }
                  />
                }
              >
                  Login
              </Button>
              <Popover
                id={id}
                open={open1}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
              <Box sx={{ p: 2 }}>
                  <Typography>Email: {userEmail}</Typography>
                  <Button onClick={handleClose}>Logout</Button>
                </Box>
              </Popover>
            </div>
          </Link>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
