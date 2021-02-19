import React from 'react';

const SpecialAbilityDetail = ({specialAbilities}) => {
    if (specialAbilities) {
        return (
            specialAbilities.map((specialAbility) => (
                <div key={specialAbility.name}>
                    <strong>{specialAbility.name}: </strong>
                    <span>{specialAbility.desc}</span>
                </div>
            ))
        );
    }
    return null;
}

export default SpecialAbilityDetail;