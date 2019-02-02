import React from 'react';

const ActionDetails = ({actions}) => {
    if (actions) {
        return (
            actions.map((action) => (
                <div>
                    <em>{action.name}: </em>
                    {action.desc}
                </div>
            ))
        )
    }
    return null;
}

export default ActionDetails;