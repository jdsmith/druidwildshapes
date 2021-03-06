import React from 'react';

const ActionDetails = ({actions}) => {
    if (actions) {
        return (
            actions.map((action) => (
                <div key={action.name}>
                    <strong>{action.name}: </strong>
                    {action.desc}
                </div>
            ))
        )
    }
    return null;
}

export default ActionDetails;