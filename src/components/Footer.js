import React from "react";
import { Box } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import { Button, Stack } from "@mui/material";
// import Modal from "@mui/material/Modal";

function Footer() {
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 10,
        },
      }}
    >
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <div
        style={{
          position: "fixed",
          
          bottom: 0,
          
          backgroundColor: ""
        }}
      >
      
            <Stack spacing={4} direction="row" alignItems="center">  
  <Button style={{ backgroundColor:"#e3f2fd"}} target={"_blank"} href="https://www.linkedin.com/in/lopez1004/"><LinkedInIcon></LinkedInIcon></Button>
  <Button  style={{ backgroundColor:"#e3f2fd"}} target={"_blank"} href="https://github.com/ryanlopez12"><GitHubIcon></GitHubIcon></Button>
  

  <Button style={{ backgroundColor:"#e3f2fd"}} target={"_blank"} href="https://ibb.co/PwQDSNR">Resume</Button>



  </Stack>


      <h5>© 2022 All rights reserved by Ryan Lopez</h5>
      </div>
    </Box>
  );
}

export default Footer;
