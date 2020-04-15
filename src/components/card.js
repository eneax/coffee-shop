import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { fluidObject } from '../utils';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
  price: {
    cursor: 'default',
    pointerEvents: 'none',
  },
}));

const CustomCard = ({ img, title, price, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia>
        <Img fluid={img} />
      </CardMedia>

      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" className={classes.price}>
          ${price.toFixed(2)}
        </Button>
      </CardActions>
    </Card>
  );
};

CustomCard.propTypes = {
  img: fluidObject.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CustomCard;
