import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class ImgMediaCard extends Component {
  constructor(props){
    super(props)
  }
render(){
  const {classes, imgSrc} = this.props
  return (
    <Card className={classes.card}>
        <CardMedia
        styles={{height: 0, paddingTop: '56%'}}
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="300"
          src={imgSrc}
          title="Contemplative Reptile"
        />
    </Card>
  );
}
}
ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);