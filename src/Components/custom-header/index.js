
import React from 'react'

function CustomHeader(props){
    return(
        <h1 className={props.customClasses.join(" ")}> 
        {props.title} </h1>

    )
}

export default CustomHeader