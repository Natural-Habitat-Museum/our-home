import React from "react"
import squareStyles from '../components/square.module.css'


const Square = (props) => {
    let pseudoClass = squareStyles.pseudo
    if (props.type === 'image'){
        pseudoClass = squareStyles.pseudoImage
    }

    return (

        <div className={ props.spanClass} >
            <div className={pseudoClass}>
                {props.children}
            </div>

        </div>
    )
}

export default Square