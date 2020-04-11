import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { fluidObject } from '../utils';

const useStyles = makeStyles(theme => ({
  bgImg: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  heroContent: {
    padding: theme.spacing(12, 0, 10),
    minHeight: '100vh',
    width: '100%',
    background:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) calc(100% - 150px), rgba(0, 0, 0, 0.23) calc(100% - 60px), rgba(0, 0, 0, 0.35))',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    fontWeight: 'bold',
  },
  heroSubTitle: {},
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = ({ img }) => {
  const classes = useStyles();

  return (
    <BackgroundImage fluid={img} className={classes.bgImg}>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            variant="h6"
            align="center"
            color="textPrimary"
            className={classes.heroSubTitle}
          >
            Baking and decorating supplies
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            className={classes.heroTitle}
          >
            Because life is sweet
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link to="/shop">
                  <Button variant="contained" color="primary">
                    Shop Now
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </BackgroundImage>
  );
};

Hero.propTypes = {
  img: fluidObject.isRequired,
};

export default Hero;
