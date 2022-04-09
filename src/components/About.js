import * as React from "react";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import { Button, Stack } from "@mui/material";
import { Grid } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../App.css";
export default function About() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="center"
        xs={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Card
            sx={{
              maxWidth: 330,
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="280"
              image="https://avatars.githubusercontent.com/u/17996569?v=4"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About Me
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hello! My name is Ryan Lopez and I am a recent graduate from UC
                Davis Coding Bootcamp. I love coding and I'm passionate about
                technology. After 23 years in retail, I have recently switched
                careers into I.T. I have been married to my wife, Kristine, for
                11 years and together we have a son named Jackson who is 8 years
                old.
              </Typography>
            </CardContent>
            <CardContent alignItems="center">
            <Stack spacing={4} direction="row" alignItems="center">  
  <Button><LinkedInIcon></LinkedInIcon></Button>
  <Button><GitHubIcon></GitHubIcon></Button>
  <Button>Resume</Button>
  </Stack>
</CardContent>
          </Card>
        </Grid>
       
      </Grid>
    </div>
  );
}
