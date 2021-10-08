import './Card.css'
import React from 'react'

export default props =>{

    const casdStyle = {
        backgroundColor: props.color || '#2f3640',
        borderColor: props.color || '#2f3640',
    }

    return (
        <div className="Card" style={casdStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}