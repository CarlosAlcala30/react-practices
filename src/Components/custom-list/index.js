import React from 'react'

function CustomList(props){

    return (
        <ul>
        {props.listItem.map((item,index)=><li key={index}>{item}</li>)}
      </ul>    
    )
}

export default CustomList