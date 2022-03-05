/** @jsx jsx */
import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { jsx, css } from '@emotion/react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function TextboxImageOverlay(props) {
    const {image, reverse} = props;

    const styling = css`

        display: flex;
        padding: 0% 10% 0% 10%;
        flex-direction: ${reverse ? "row-reverse" : "row"};
        
        .reverse{
            right: ${reverse ? "20%" : "0px"};
        }

        .subContainer{
            flex: 1;
            position: relative;
        }

    `

    return(
        
        <div css={styling} className='parentContainer'>
            <div className='subContainer reverse'>
                <ScrollAnimation animateIn="animate__fadeIn" duration={.5} animateOnce={true}>
                    <div style={{lineHeight: "0px"}}>
                    {/*<MediaCard style ={{width: "100%", height: "100%", display: "inlineBlock"}} imgSrc={require("./img/Home_img1.jpeg")}></MediaCard>
                    */}

                        <img style={{width: "140%" }} src={image}></img>
                    </div>
                </ScrollAnimation>
            </div>

            <div className='subContainer' style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <ScrollAnimation animateIn={reverse ? "animate__fadeInLeft" : "animate__fadeInRight"} duration={.5} animateOnce={true}>
                    <Card style={{padding: "20px 40px 10px 40px", fontSize: "20px" }}>
                        <h2 style={{fontSize: "calc(1.62vw + 12px)"}}>Awesome Docker Shit</h2>
                        <hr style={{backgroundColor: "#86B3D1", height: "3px", border: "none"}}></hr>
                        <p>
                        {`Lorem ipsum dolor sit amet. Sed commodi eius non autem molestiae ut tenetur fugit est atque fuga aut dolor delectus. Sed quia voluptatem ex ipsum rerum ab rerum labore perspiciatis earum qui dolorem molestiae ea suscipit mollitia.Ut quae optio eum distinctio dicta rem atque minus At incidunt impedit. Nam dolorem nihil At quis dolor vel soluta ducimus. Cum aliquam debitis vel excepturi laudantium qui maxime assumenda non dolorem quisquam.`}
                        </p>

                        {/*
                        <p>
                        I am a motivated Computer Science major at Oregon State University with a passion for knowledge.
                        I also have a Math minor since I enjoy problem solving and mathematical logic. My major interests include Docker, full stack development, and application development.
                        After working at CDK Global as an intern doing full stack development, I found that I really enjoyed doing this. I like the challenge of making all the different parts of a website work together and I also like knowing how everything works.
                        I have always had an interest in Docker and have strived to learn more about it despite the lack of classes covering the material. I have gone out of my way to learn this technology and find projects to work on that incorporate it. For example, my senior project for HP involved using Docker to help cut down on resource usage on their printing servers.
                        </p> */}
                    </Card>
                </ScrollAnimation>
            </div>
        </div>
    )
}
