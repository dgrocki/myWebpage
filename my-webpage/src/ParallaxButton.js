import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ParallaxScroll from './ParallaxScroll';
import { Parallax, Background } from 'react-parallax';
import "./ParallaxButton.css";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});



class ParallaxButton extends Component {


    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        console.log("hello")
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    render() {
        const { classes } = this.props;
        return (
            <div
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
            >

                {

                    this.state.isHovering &&
                    <div 
                    className={"ripple"}
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.35)",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                        width: "100%",
                        zIndex: "1",
                        cursor: "pointer"

                    }}>
                        <h1 className={"noTextHighlight"} style={{ color: "white", zIndex: "2", fontSize: "50px",

                }}>
                    Nectar of the Gods
                
                    </h1>

                </div >
                }

            <Parallax
    strength={500}
    bgImage={require("./img/movie_poster.jpeg")}
    bgImageStyle={{ paddingTop: "168px" }}
    renderLayer={percentage => (
        <div
            style={{
                position: 'absolute',
                width: percentage * 500,
                height: percentage * 500,
            }}
        />
    )}
>
    <div style={{ height: "50vh" }}>
    </div>
</Parallax>

        </div >
    );
}
}
ParallaxButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParallaxButton);