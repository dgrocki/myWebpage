import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
import LinkButton from "./LinkButton"
import About from "./About"

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

const Index = () => <h2>Home</h2>;
const Contact = () => <h2>Users</h2>;
const AppRouter = () => (
<div>
  <Router>
    <div>
        <AppBar position="static">
          <Toolbar>
            <div style={{ flexGrow: "1", float: "left" }}>Welcome</div>
            <LinkButton to='/'>Home</LinkButton>
            <LinkButton to='/about'>About</LinkButton>
            <LinkButton to='/contact'>Contact</LinkButton>
          </Toolbar>
        </AppBar>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
      </div>
  </Router>
  </div>
);
export default AppRouter;
  {{/*
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <div style={{ flexGrow: "1", float: "left" }}>Welcome</div>
            <Button color="inherit" style={{ float: "right" }}>Login</Button>
          </Toolbar>
        </AppBar>

  */}}
{{/*
class App extends Component {
  render() {
    return (
      <div>
  <Router>
    <div>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/users/">Users</Link>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      </div>
  </Router>
  {{/*
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <div style={{ flexGrow: "1", float: "left" }}>Welcome</div>
            <Button color="inherit" style={{ float: "right" }}>Login</Button>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

export default App;
*/}}