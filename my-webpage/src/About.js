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
import MediaCard from './MediaCard'
import './About.css';
import ImgButton from './ImgButton';
import TechnologyText from "./TechnologyText"

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
  constructor(props){
    super(props)
    this.state = {
      expand: false,
      currentSkill: "",
      flip: ""
    }

  }
componentDidUpdate(){
  if(this.state.flip != ""){
    setTimeout(() => {
      console.log('I do not leak!');
    this.setState({
        expand: !this.state.expand,
        currentSkill: this.state.flip,
        flip: ""
    })
    }, 200);
  }

}
handle_on_click = (e, skill) =>
{

  if(this.state.currentSkill == skill){
      this.setState({expand : !this.state.expand,
                    currentSkill : ""
      })}
    else if(this.state.currentSkill == ""){
      this.setState({expand : !this.state.expand,
                    currentSkill : skill
      })}
      else{
      this.setState({
                    expand: !this.state.expand,
                    flip: skill,
                    currentSkill : ""
    })
    
  }

/*
  if(this.state.currentSkill == skill){
      this.setState({expand : !this.state.expand,
                    currentSkill : ""
      })}
    else if(this.state.currentSkill == ""){
      this.setState({expand : !this.state.expand,
                    currentSkill : skill
      })}
      else{
      this.setState({
                    currentSkill : skill
    })}
  */
 
  

}

  render() {
    return (
      <div className="About">

        <header> 

    </header>



    <Card style = {{display: "flex"}}>
      <MediaCard style ={{flex: "1"}} imgSrc={require("./img/Daniel_Grocki.jpg")}></MediaCard>
      <CardContent style={{flex: "1"}}>
        <h3>Who am I</h3>
        <div>I am a motivated Computer Science major at Oregon State University with a passion for knowledge. 
        I also have a Math minor since I enjoy problem solving and mathematical logic. My major interests include Docker, full stack development, and application development.
        After working at CDK Global as an intern doing full stack development, I found that I enjoyed the challenge of making all the different parts work togtheter. 
        I have always had an interest in Docker and have strived to learn more about it despite the lack of classes covering the material.
              
        </div>
      </CardContent>
    </Card>
    <Card>
      <h1>Skills</h1>
    </Card>

    <Card>
      <ImgButton imgSrc={require("./img/c++icon.svg")} onClick={(e) => this.handle_on_click(e, "cplusplus")}></ImgButton>
      <ImgButton imgSrc={require("./img/logo.svg")} onClick={(e) => this.handle_on_click(e, "react")}></ImgButton>
      <ImgButton imgSrc={require("./img/DockerLogo.svg")} onClick={(e) =>this.handle_on_click(e,"docker")}></ImgButton>
      <ImgButton imgSrc={require("./img/Linux.svg")} onClick={(e) => this.handle_on_click(e ,"linux")}></ImgButton>
      <ImgButton imgSrc={require("./img/cSharp.png")} onClick={(e) => this.handle_on_click(e ,"csharp")}></ImgButton>
    
      <div className="Expand" style={{maxHeight: this.state.expand ? "100px": "0px",  whiteSpace: "pre-line"}}>
        {TechnologyText[this.state.currentSkill]}
      </div>

    </Card>
      </div>
    );
  }
}

export default About;