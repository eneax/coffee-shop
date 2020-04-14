import React from 'react';
import Img from 'gatsby-image';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
        <Button size="small" color="primary">
          ${price.toFixed(2)}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
