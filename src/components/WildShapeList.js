import React from 'react';

const WildShapeList = ({wildShapes = [], onBeastSelect}) => {
    const wildShapeListItems = wildShapes.map((wildShape)=> {
        return (
            <li key={wildShape.name} onClick={() => onBeastSelect(wildShape.slug)}>
                {wildShape.name}
            </li>
        );
    });

    return (
        <ul className="wildshape-list">
            {wildShapeListItems}
        </ul>
    )
}

export default WildShapeList;