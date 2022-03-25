import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";
import "../App.css";

export default function Projects() {
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
              height="180"
              image="https://user-images.githubusercontent.com/17996569/136119905-1220177a-7d03-4391-a9c2-a37f239bf693.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Horiseon Refactor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Horiseon refactor code. Assigned with debugging and
                consolidating code to follow standards and functionality.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">
                <a href="https://ryanlopez12.github.io/ucd/">Click Here!</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
     

      
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
              height="180"
              image="https://ryanlopez12.github.io/rlopez-portfolio/assets/robotsg.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Robot Gladiators!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Created 2 robots with life points and fight them to the
                death...through text.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">
                <a href="https://ryanlopez12.github.io/robot-gladiators/">
                  Click Here!
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
    
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
              height="180"
              image="https://i.imgur.com/0AWnBY4.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Run Buddy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website created with contact information, profiles of trainers,
                map extension and more!!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">
                <a href="https://ryanlopez12.github.io/run-buddy/">
                  Click Here!
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
     
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
            height="180"
            image="https://i.imgur.com/UxeRaiW.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Console This!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Project 1: Can't find a game console anywhwere? Use api's to
              create search strings and query results from Ebay or Bestbuy. Then
              use the google maps api to then locate and go get one!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <a href="https://trane7.github.io/Console-This/">Click Here!</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
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
            height="180"
            image="https://i.imgur.com/DmypBC4.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quick Quack Quiz
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Project 2: Quick Quack Quiz is a quiz creator for everyone. Create
              your user profile and start creating quizzes today. Stored in
              online storage your user profile retains all of your previous
              quizzes or the ones you comment on!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <a href="https://quick-quack-quiz.herokuapp.com/">Click Here!</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
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
            height="180"
            image="https://i.imgur.com/JLOLYKt.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Plenty.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Project 3: Can't find something to eat that's in the pantry? Reach
              for Plenty and search for the items you already have and create a
              masterpiece! Multiple queries results from apis to find more
              options!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <a href="https://plenty-in-the-pantry.herokuapp.com/">
                Click Here!
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      </Grid>
    </div>
  );
}
