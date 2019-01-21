import React, { Component } from 'react';
import { Card, CardContent, CardActionArea, Button } from '@material-ui/core';
import ImgButton from './ImgButton';

class Contact extends Component {
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Card style={{display: "flex", width:"100%", justifyContent: "center"}}>
                    <CardContent>
                        <span style={{fontSize: "30px"}}>Contact Me Here</span>
                    </CardContent>
                </Card>

                <Card style={{display: "flex", width:"100%", justifyContent: "center"}}>
                    <a href="https://github.com/dgrocki">
                        <ImgButton imgSrc={require("./img/GitHub-Mark.svg")}></ImgButton>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-grocki-27333216a/">
                        <ImgButton imgSrc={require("./img/Linkedin_icon.svg")} ></ImgButton>
                    </a>

                </Card>


            </div>

        )

    }

}
export default Contact;