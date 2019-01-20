import React, { Component } from 'react';
import { Card, CardContent, CardActionArea, Button } from '@material-ui/core';
import ImgButton from './ImgButton';

class Contact extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        Contact Me Here
                    </CardContent>
                </Card>

                <Card style={{ justifyContent: "center" }}>
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