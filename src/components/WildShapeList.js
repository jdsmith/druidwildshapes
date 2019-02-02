import React from 'react';

const WildShapeList = ({wildShapes}) => {
    const wildShapeListItems = wildShapes.map((wildShape)=> (
        <li key={wildShape.name}>
            {wildShape.name} {wildShape.cr}
        </li>
    ));

    return (
        <ul>
            {wildShapeListItems}
        </ul>
    )
}

export default WildShapeList;