import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import logo from './logo.svg';
import MediaCard from './MediaCard'
import './App.css';

 const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};
class About extends Component {
  render() {
    return (
      <div className="About">

        <header> 

    </header>



    <Card style = {{display: "flex"}}>
      <MediaCard style ={{flex: "1"}}></MediaCard>
      <CardContent style={{flex: "1"}}>
        <div>blah blah blah</div>
      </CardContent>
    </Card>
    <Card >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          lent
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
      </div>
    );
  }
}

export default About;