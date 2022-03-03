/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';

import ProfilePhoto from "./img/20161115_084123.jpg";


function ImageContainer(props) {
  const [ hover, setHover ] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid green; */}
    width: calc(38vw - 3px + 25px);
    height: calc(((38vw - 4px) * 1.250723) + 25px);
    max-width: 496px;
    max-height: calc((500px - 4px) * 1.250723);
    position: relative;
    img {
      position: absolute;
      top: 10px;
      left: 0px;
      z-index: 3;
      width: 45vw;
      max-width: 1000px;

    }
    .img-border {
      position: absolute;
      height: calc((45vw - 4px) * .5625);
      width: calc(45vw - 4px);
      max-width: 1000px;
      max-height: calc((1000px - 4px) * .5625);

      border: 4px solid rgba(255, 255, 255, 1);
    }
    .border-2 {
      top: -10px;
      left: 20px;
      z-index: 1;
      border-color: #934A2B;
    }
  `;

  return (
    <div>
      <img src={ProfilePhoto} alt="Me" />

      <div className="img-border border-2"></div>
    </div>
  );
}


export default ImageContainer;



{/*${'' /* border: 1px solid green;
    width: calc(10vw - 3px + 25px);
    height: calc(((10vw - 4px) * 1.250723) + 25px);
    max-width: 496px;
    max-height: calc((500px - 4px) * 1.250723);
    position: relative;
    img {
      position: relative;
      top: 10px;
      left: 0px;
      z-index: 3;
      width: 10vw;
      max-width: 1000px;

    }
    .img-border {
      position: absolute;
      height: calc((10vw - 4px) * .5625);
      width: calc(10vw - 4px);
      max-width: 1000px;
      max-height: calc((1000px - 4px) * .5625);

      border: 4px solid rgba(255, 255, 255, 1);
    }
    .border {
      transition: border 0.6s ease 0.4s;
      border: ${hover ? "10px solid rgb(157, 199, 217)" : "10px solid rgb(19, 92, 124)"};
      z-index: 4;
    }
    .border-1 {
      bottom: 7px;
      left: 7px;
      z-index: 2;
      transition: border 0.6s ease 0.2s;
      border: ${hover ? "3px solid rgb(157, 199, 217)" : "3px solid rgb(19, 92, 124)"};
    }
    .border-2 {
      top: -10px;
      left: 20px;
      z-index: 1;
      border-color: #934A2B;
    }
  `; */}