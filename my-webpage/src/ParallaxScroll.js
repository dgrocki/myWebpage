import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';


class ParallaxScroll extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {imgSrc, viewPort, imgHeight, strength, pt, width}  = this.props
        return (
            <div>

                <Parallax strength={strength || 500}
                >

                    <div style={{ height: viewPort||"100vh", width: "auto" }}>
                    </div>
                    <Background  className="custom-bg">


                        <div >
                            <img style={{ maxHeight: imgHeight, width: width, paddingTop: pt||"0px"}}

                                src={imgSrc}
                            />
                        </div>

                    </Background>
                </Parallax>
            </div>

        )

    }

}

export default ParallaxScroll