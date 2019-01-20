import React, { Component } from 'react';
import Button from "@material-ui/core/Button"

class ImgButton extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
                <Button onClick={this.props.onClick}><img style={{ height: "100px", width: "auto" }} src={this.props.imgSrc}></img></Button>
        )
    }
}

export default ImgButton;