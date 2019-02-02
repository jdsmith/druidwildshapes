import React from 'react';

const SpecialAbilityDetail = ({specialAbilities}) => {
    if (specialAbilities) {
        return (
            specialAbilities.map((specialAbility) => (
                <div>
                    <span>{specialAbility.name}: </span>
                    <span>{specialAbility.description}</span>
                </div>
            ))
        );
    }
    return null;
}

export default SpecialAbilityDetail;