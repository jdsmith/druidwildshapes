import React from 'react';
import { Link } from 'react-router-dom';

const WildShapeList = ({wildShapes}) => {
    const wildShapeListItems = wildShapes.map((wildShape)=> {
        const linkPath = `/wildshapes/${wildShape.id}`;
        return (<li key={wildShape.name}>
            <Link to={linkPath}>
                {wildShape.name} {wildShape.cr}
            </Link>
        </li>);
    });

    return (
        <ul className="wildshape-list">
            {wildShapeListItems}
        </ul>
    )
}

export default WildShapeList;