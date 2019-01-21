import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';

class Resume extends Component {

    render() {
        return (

            <div>
                <Card style={{display: "flex", justifyContent: "center"}}>
                    <CardContent style={{fontSize: "30px"}}>
                        Read and download my resume here
                    </CardContent>
                </Card>
                <Card>

                </Card>
                <embed src={require("./pdf/resume.pdf")} type="application/pdf" width="100%" height="600px" />
            </div>

        )



    }


}
export default Resume