import React from "react"
//This is from the emotion css in js library
import { css } from '@emotion/core'




const Rectangle = (props) => {

    const style = css`
    background-color: white;
    color: black;
    border: ${props.border};
    transition: background-color 2s;
    grid-column-start: ${props.colStart};
    grid-column-end: ${props.colEnd};
    
    @media only screen and (max-width: 770px) {
        grid-column-start: 1;
        grid-column-end: span 6;

        & a.social-media-link {
            font-size: 1.5em;
        }
    }

    &:hover {
    }
    & h4{
        color: green;
    }
    & h4:last-child{
        color: blue;
        margin: 0;
    }
    & a.social-media-link {
        display: inline-block;
        color:black;
        margin-right: 20px;
        transition: transform 0.4s;
    }
    & a.social-media-link:hover{
        transform: rotate(-360deg);
    }
    `


    return (
        <div css={style}>
            {props.children}
        </div>
    )


}


export default Rectangle