import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React from 'react';

function Features(){
    return(
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">SeePrevious</Button>
            <Button variant="secondary">ComparePrevious</Button>
            <Button variant="secondary">HideShowDetails</Button>
            <Button variant="secondary">SearchPreviouss</Button>
            <Button variant="secondary">SeeHistory</Button>
            <Button variant="secondary">FilterChanges</Button>
            <Button variant="secondary">PrivateNotes</Button>
            <Button variant="secondary">LiveSignoff</Button>
            <Button variant="secondary">LiveEdit</Button>
        </ButtonGroup>

    )
}
export default Features