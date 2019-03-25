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
import Expand from 'react-expand-animated';
import ExpandMenu from './ExpandMenu';
import ParallaxScroll from './ParallaxScroll';


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
  constructor(props) {
    super(props)
    this.state = {
      expand: false,
      currentSkill: "",
      flip: ""
    }

  }
  componentDidUpdate() {
    if (this.state.flip != "") {
      setTimeout(() => {    //timeout to allow for expand to close old before opening new
        this.setState({
          expand: !this.state.expand,
          currentSkill: this.state.flip,
          flip: ""
        })
      }, 450);  //make sure this is set to be a little longer than animation time for expand
    }

  }
  handle_on_click = (e, skill) =>   //pass in a skill associated with the button press, sets the div to display appropriate text
  {

    if (this.state.currentSkill != skill && this.state.expand == true) {  //if I have drawer open and skill changes
      this.setState({
        expand: !this.state.expand,
        flip: skill     //used in componenetdidupdate to make sure the drawer closes with old text but opens with new
      })
    }
    else if (this.state.currentSkill == "") {                       //if my drawer is closed with no string then expand with current skill
      this.setState({
        expand: !this.state.expand,
        currentSkill: skill
      })
    }

    else {                                           //just open and close the drawer normally with current skill
      this.setState({
        expand: !this.state.expand,
        currentSkill: skill
      })
    }
  }

  render() {
    let prjct_docker = "For my senior capstone class at OSU, I worked on a project for HP. The project involved using Docker to containerize services used in printing. In order to run large scale printers, the PDF’s needed to be parsed and formatted properly. This took multiple different components and they wanted us to make these components run more efficiently. For the project, we created a prototype of their existing system with each component containerized. We wrote Dockerfiles for the code that we wrote in Groovy. In addition to creating our own images, we used images of several outside resources to run the proper components for our project.\n After we had the containers communicating and working, we wanted to use Kubernetes to deploy the entire pod of containers. We used Kubernetes to deploy the containers and set up all of the networking for them. We also used Kubernetes to allow for easy scalability of our system using replicas. \n During this process, we operating in 2 week sprints set up by our client. We had biweekly meetings at HP to discuss our progress and do sprint planning for the next 2 weeks. We wrote unit tests for our different components and used Jenkins for continuous integration. When we pushed our code to Github, Jenkins would build and test the code and confirm that our code is safe. We also wrote down documentation for the project in addition to creating design and requirement documents. "
    return (
      <div className="About">

        <header>

        </header>

        <div style={{ position: "relative" }}>
          <ParallaxScroll imgSrc={require("./img/20161221_162743.jpg")} viewPort="92vh" imgHeight="1100px"></ParallaxScroll>
          <div style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            position: "absolute",
            top: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "92vh", //match the height of parallax scroll
            width: "100%"

          }}>
            <div
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >

              <h1 style={{ zIndex: "2", color: "white", fontSize: "90px", display: "block", margin: "5px" }}>Daniel Grocki</h1>
              <h2 style={{ zIndex: "2", color: "white", fontSize: "60px", display: "block", margin: "5px", marginTop: "0px" }}>. . .</h2>
              <h2 style={{ zIndex: "2", color: "white", fontSize: "60px", display: "block", margin: "5px" }}>Software Developer</h2>


            </div>
          </div>

        </div>



        <Card style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ padding: "30px" }}>
            <h1 style={{ fontSize: "40px" }}>Who am I</h1>
          </div>
          <div style={{ display: "flex", padding: "20px", width: "100%", justifyContent: "center" }}>
            <div style={{ flex: "2", display: "flex", justifyContent: "center", padding: "20px 20px 10px 10px", height: "100%" }}>
              <div style={{ minWidth: "350px" }}>
                {/*<MediaCard style ={{width: "100%", height: "100%", display: "inlineBlock"}} imgSrc={require("./img/Home_img1.jpeg")}></MediaCard>
                            */}
                <img style={{ maxWidth: "100%" }} src={require("./img/Daniel_Grocki.jpg")}></img>
              </div>
            </div>
            <div style={{ flex: "3", padding: "20px 40px 10px 40px", display: "flex", justifyContent: "center", fontSize: "20px" }}>
              I am a motivated Computer Science major at Oregon State University with a passion for knowledge.
              I also have a Math minor since I enjoy problem solving and mathematical logic. My major interests include Docker, full stack development, and application development.
              After working at CDK Global as an intern doing full stack development, I found that I really enjoyed doing this. I like the challenge of making all the different parts of a website work together and I also like knowing how everything works.
              I have always had an interest in Docker and have strived to learn more about it despite the lack of classes covering the material. I have gone out of my way to learn this technology and find projects to work on that incorporate it. For example, my senior project for HP involved using Docker to help cut down on resource usage on their printing servers.

        </div>
          </div>
        </Card>












        <div style={{ position: "relative" }}>
          <ParallaxScroll imgSrc={require("./img/20161221_152625.jpg")} viewPort="40vh" imgHeight="1100px"></ParallaxScroll>
          <div style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            position: "absolute",
            top: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40vh", //match the height of parallax scroll
            width: "100%"

          }}>
            <h1 style={{ zIndex: "2", color: "white", fontSize: "40px" }}>Skills</h1>
          </div>
        </div>


          <div style={{
              display: "flex",
          }}>
            <div style={{margin: "10px", width: "100%"}}>
              <div style={{display: "flex", justifyContent: "center"}}>
                <h2 style={{fontSize: "30px"}}>Full Stack Development</h2>
                
              </div>
              <ul>
                <li style={{fontSize: "20px", margin: "15px"}}>Designed and created front end code using ReactJS</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Implemented Redux to manage state and API communication in a React App</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Created HTTP endpoints in C# for CRUD operations</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Created database schemas in PostgreSQL and connected it to API</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Databases course on SQL</li>
              </ul>
            </div>
            <div style={{margin: "10px", width: "100%"}}>
              <div style={{display: "flex", justifyContent: "center"}}>
                <h2 style={{fontSize: "30px"}} >Containerization</h2>
                
              </div>
              <ul>
                <li style={{fontSize: "20px", margin: "15px"}}>Writen Dockerfiles for Java applications as well as for demos</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Explored Docker networking by creating custom networks and connecting containers to them</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Written Docker-Compose files for starting up multiple containers communicating with each other</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Used Docker Volumes to share information between containers and the host system</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Written Kubernetes deployment files to deploy sets of containers</li>
              </ul>
            </div>
            <div style={{margin: "10px", width: "100%"}}>
              <div style={{display: "flex", justifyContent: "center"}}>
                <h2 style={{fontSize: "30px"}} >Application Development</h2>
                
              </div>
              <ul>
                <li style={{fontSize: "20px", margin: "15px"}}>Practice using object oriented programming languages from classes</li>
                <li style={{fontSize: "20px", margin: "15px"}}>Experinece using Java to develop Android applications</li>
                <li style={{fontSize: "20px", margin: "15px"}}>C++ and C experience from being a Teacher Assistant for these courses at OSU</li>
              </ul>
            </div>

          </div>



        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "740px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Card style={{ display: "flex", justifyContent: "center", boxShadow: "none", paddingTop: "20px" }}>
              <ImgButton imgSrc={require("./img/c++icon.svg")} onClick={(e) => this.handle_on_click(e, "cplusplus")}></ImgButton>
              <ImgButton imgSrc={require("./img/logo.svg")} onClick={(e) => this.handle_on_click(e, "react")}></ImgButton>
              <ImgButton imgSrc={require("./img/DockerLogo.svg")} onClick={(e) => this.handle_on_click(e, "docker")}></ImgButton>
              <ImgButton imgSrc={require("./img/Linux.svg")} onClick={(e) => this.handle_on_click(e, "linux")}></ImgButton>
              <ImgButton imgSrc={require("./img/cSharp.png")} onClick={(e) => this.handle_on_click(e, "csharp")}></ImgButton>


            </Card>

            <Expand open={this.state.expand}>
              <div className="Expand" style={{ fontSize: "20px", maxHeight: "500px", whiteSpace: "pre-line", marginTop: "15px", marginBottom: "50px", padding: "10px" }}>
                {TechnologyText[this.state.currentSkill]}
              </div>
            </Expand>
          </div>
        </div>



        <div style={{ position: "relative", marginTop: "40vh" }}>
          <ParallaxScroll imgSrc={require("./img/20170529_084457.jpg")} viewPort="40vh" imgHeight="1100px"></ParallaxScroll>
          <div style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            position: "absolute",
            top: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40vh", //match the height of parallax scroll
            width: "100%"

          }}>
            <h1 style={{ zIndex: "2", color: "white", fontSize: "40px" }}>Projects</h1>
          </div>
        </div>

        <Card style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ padding: "30px" }}>
            <h1 style={{ fontSize: "40px" }}>Containerization for HP</h1>
          </div>
          <div style={{ display: "flex", padding: "20px", width: "100%", justifyContent: "center" }}>
            <div style={{ flex: "3",whiteSpace: "pre-line", padding: "20px 40px 10px 40px", display: "flex", justifyContent: "center", fontSize: "20px" }}>
            {`For my senior capstone class at OSU, I worked on a project for HP. The project involved using Docker to containerize services used in printing. In order to run large scale printers, the PDF’s needed to be parsed and formatted properly. This took multiple different components and they wanted us to make these components run more efficiently. For the project, we created a prototype of their existing system with each component containerized. We wrote Dockerfiles for the code that we wrote in Groovy. In addition to creating our own images, we used images of several outside resources to run the proper components for our project. \n\n After we had the containers communicating and working, we wanted to use Kubernetes to deploy the entire pod of containers. We used Kubernetes to deploy the containers and set up all of the networking for them. We also used Kubernetes to allow for easy scalability of our system using replicas. \n\n During this process, we operated in 2 week sprints set up by our client. We had biweekly meetings at HP to discuss our progress and do sprint planning for the next 2 weeks. We wrote unit tests for our different components and used Jenkins for continuous integration. When we pushed our code to Github, Jenkins would build and test the code and confirm that our code is safe. We also wrote down documentation for the project in addition to creating design and requirement documents. `}
        </div>
            <div style={{ flex: "2", display: "flex", justifyContent: "center", padding: "20px 20px 10px 10px", height: "100%" }}>
              <div style={{ minWidth: "350px" }}>
                {/*<MediaCard style ={{width: "100%", height: "100%", display: "inlineBlock"}} imgSrc={require("./img/Home_img1.jpeg")}></MediaCard>
                            */}
                <img style={{ maxWidth: "100%" }} src={require("./img/20161115_084123.jpg")}></img>
              </div>
            </div>
          </div>
        </Card>



        <Card
          style={{ height: "50vh" }}
        ></Card>

      </div>
    );
  }
}

export default About;