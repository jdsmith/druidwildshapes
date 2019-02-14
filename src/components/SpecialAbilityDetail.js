import React from 'react';

const SpecialAbilityDetail = ({specialAbilities}) => {
    if (specialAbilities) {
        return (
            specialAbilities.map((specialAbility) => (
                <div>
                    <strong>{specialAbility.name}: </strong>
                    <span>{specialAbility.desc}</span>
                </div>
            ))
        );
    }
    return null;
}

export default SpecialAbilityDetail;