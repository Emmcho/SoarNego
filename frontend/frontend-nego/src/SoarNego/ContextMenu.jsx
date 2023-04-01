//import { useState, forwardRef } from "react"
//import { useImperativeHandle } from "react"
import React from 'react';
import Button from 'react-bootstrap/Button';

const ContextMenu = (props )  =>{

    console.log(props.selectedText)

    return (
        <div style={props.css}>
            

            <Button variant="secondary">SeePrevious</Button>
            <Button variant="secondary">ComparePrevious</Button>
            <Button variant="secondary">SearchPrevious</Button>
            <Button variant="secondary">SeeHistory</Button>
            
        
            
        </div>
    )
}

export default ContextMenu