
import React from "react";
import { NavLink } from "react-router-dom";
import { Button} from "@material-ui/core";
import { Stack } from "@mui/material";


import { Box } from "@material-ui/core";



// import Logo from "../../src/logo.png";

function Navbar() {
  return (
    <div>
    
        <Box
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 10,
          },
        }}>
        <Stack spacing={1} direction="row">  
        
         
    
                <NavLink style={{ textDecoration: 'none' }} to="/">
                
                  <Button variant="contained">Home</Button>
                 
                </NavLink>
             
              
                <NavLink style={{ textDecoration: 'none' }} to="/about">
                <Button variant="contained">About</Button>
                </NavLink>
              
             
                <NavLink style={{ textDecoration: 'none' }}to="/contact">
                <Button variant="contained">Contact</Button>
                </NavLink>
              
             
                <NavLink style={{ textDecoration: 'none' }}to="/projects">
                <Button variant="contained">Projects</Button>
                </NavLink>
             
   
        
          </Stack>
          </Box>
          </div>
  );
}

export default Navbar;
