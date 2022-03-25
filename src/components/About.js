import React from "react";
import {Card, CardMedia, Typography, CardContent} from "@material-ui/core";

function About() {
  return (
  <div>
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
              height="180"
              image="https://user-images.githubusercontent.com/17996569/136119905-1220177a-7d03-4391-a9c2-a37f239bf693.png"
            />

     <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      <h1>About</h1>
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Hello! My name is Ryan Lopez and I am a recent graduate from UC Davis Coding Bootcamp. 
      I love coding and I'm passionate about technology.
       After 23 years in retail, I have recently switched careers into I.T.  
         I have been married to my wife, Kristine, for 11 years 
      and together we have a son named Jackson who is 8 years old.
      </Typography>
      </CardContent>
         
         
          </Card>
          </div>  

  );
}

export default About;