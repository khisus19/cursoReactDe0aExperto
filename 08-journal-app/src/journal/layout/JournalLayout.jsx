import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";


const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>

      {/* Navbar */}
      <NavBar drawerWidth={ drawerWidth } />

      {/* Sidebar */}
      <SideBar drawerWidth={ drawerWidth } />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar - Sirve para que ocupe el espacio debajo del NavBar y desplace lo demás hacia abajo*/}
        <Toolbar />

        { children }
      </Box>
    </Box>
  )
}