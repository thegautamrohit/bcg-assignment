import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import HeroComponent from "../HeroComponent/HeroComponent";
import SideBar from "../SideBar/SideBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import { CityStackData } from "../../../../CityStackData";

const drawerWidth = 420;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [selectedStack, setSelectedStack] = useState(CityStackData[0]);

  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="bgColor">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon
              style={{
                color: "#fff",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#fff" }}
          >
            Details
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle
                style={{
                  color: "#fff",
                }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader
            style={{
              backgroundColor: "#082f41",
              color: "#fff",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div className="flex items-center justify-start gap-4">
              <IconButton onClick={handleDrawerClose}>
                <KeyboardBackspaceIcon
                  onClick={() => router.back()}
                  className="cursor-pointer"
                  sx={{
                    color: "#fff",
                  }}
                />
              </IconButton>
              <h2 className="text-2xl font-semibold text-left">STACK SAMPLE</h2>
            </div>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon
                sx={{
                  color: "#fff",
                }}
              />
            </IconButton>
          </DrawerHeader>
          <SideBar
            setSelectedStack={setSelectedStack}
            selectedStack={selectedStack}
          />
          <Divider />
        </Drawer>

        <Main
          open={open}
          style={{
            padding: 0,
            overflowX: "scroll",
          }}
        >
          <HeroComponent selectedStack={selectedStack} />
        </Main>
      </Box>
    </>
  );
}
