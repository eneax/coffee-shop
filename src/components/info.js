import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  infoContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 10),
  },
  infoButtons: {
    marginTop: theme.spacing(4),
  },
  linkButton: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Info = () => {
  const classes = useStyles();

  return (
    <div className={classes.infoContent}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcome to Fairy Cake - your home for all things baking and
          decorating. From cups and toppers to pearls and gems, we’ve got your
          cake covered. If you can dream it, we’ll help you create it. Let’s get
          baking!
        </Typography>
        <div className={classes.infoButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/about-us" className={classes.linkButton}>
                <Button variant="contained" color="primary">
                  About Us
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Info;
