/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { Component, useState } from 'react';

import ProfilePhoto from "./img/one.jpg";


class ImageContainer extends Component{

  constructor(props)
  {
    super(props)
  }


  render(){
  const {top, left}  = this.props

  const styling = css`
    ${'' /* border: 1px solid green; */}
    position: relative;
    img {
      width: calc(30vw - 9px);
      position: relative;
      z-index: 2;
    }
    .img-border {
      position: absolute;
      height: calc(30vw - 17px);
      width: calc(100% - 8px);

      border: 4px solid #934A2B;
    }
    .border-2 {
      top: ${top};
      left: ${left};
      z-index: 1;
    }
  `
    return (
      <div css={styling} >
        <img src={ProfilePhoto} alt="Me" />

        <div className="img-border border-2"></div>
      </div>
    )
  }
}


export default ImageContainer;