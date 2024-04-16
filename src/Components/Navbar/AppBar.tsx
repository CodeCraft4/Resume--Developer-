import React from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import styles from './AppBar.module.css'
import { LinkedIn, WhatsApp } from "@mui/icons-material";

const AppBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottom:"1px solid rgba(0,0,0,0.3)"
      }}
    >
      <Link href="/" style={nextLink}>LOGO</Link>
      <List
      className={styles.menu5}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ListItem>
          <Link href="/" style={nextLink}>Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/Pages/About" style={nextLink}>About</Link>
        </ListItem>
        <ListItem>
          <Link href="/Pages/Skills" style={nextLink}>Skills</Link>
        </ListItem>
        <ListItem>
          <Link href="/Pages/Project" style={nextLink}>Project</Link>
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
        sx={{
          fontFamily:"cursive",
          mr:1,
        }}
        >+92 341 2764 104</Typography>
        <WhatsApp/>
        <LinkedIn/>
      </Box>
    </Box>
  );
};

export default AppBar;


const nextLink={
    color:"white",
    textDecoration:"none",
}