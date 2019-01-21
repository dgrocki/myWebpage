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
    <Card style={{minWidth: "400px"}}>
        <CardMedia
        styles={{height: 0, paddingTop: '56%'}}
          component="img"
          className={classes.media}
          src={imgSrc}
        />
    </Card>
  );
}
}
ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);