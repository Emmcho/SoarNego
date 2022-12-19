import { useState, forwardRef } from "react"
import { useImperativeHandle } from "react"

const ContextMenu = (props )  =>{

    console.log(props.selectedText)

    return (
        <div style={props.css}>
            <button>AC</button>
            <button>AC1</button>
        </div>
    )
}

export default ContextMenu