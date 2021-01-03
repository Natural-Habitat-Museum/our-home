import React from 'react'
import { css } from '@emotion/core'
import { Link } from "gatsby"



const HomeButton = () => {

    const style = css`
    position: fixed;
    top: 10px;
    left 10px;
    display:flex;
    flex-direction: column;
    background-color: white;
    color: black;
    border: none;
    border-radius: 999px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    width: 60px;
    height: 60px;
    transition: box-shadow 0.5s;
    align-items: center;
    justify-content: center;
    padding-bottom 1px;
    
    @media only screen and (max-width: 770px) {
 
    }

    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

    }
    `


    return (
        <Link>
            <div css={style}>

                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.32086 0L0 5.7234e-08L1.1458e-06 26H1.34043L1.34043 13.8125H13.6548L19.6596 19.6322V26H21V3.52209e-08H19.6596V12.483H14.2009L1.32086 0ZM1.34043 1.87781L1.34043 12.483H12.2829L1.34043 1.87781ZM15.5728 13.8125L19.6596 17.7733V13.8125H15.5728Z" fill="black" />
                </svg>


            </div>
        </Link>
    )

}

export default HomeButton