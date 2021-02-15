import React from 'react';
import SpecialAbilityDetail from './SpecialAbilityDetail';
import ActionDetails from './ActionDetails';

const BeastDetails = ({ details }) => {
    const {
        name,
        size,
        armor_class,
        hit_points,
        speed = {},
        strength,
        dexterity,
        constitution,
        damage_resistances,
        damage_vulnerabilities,
        damage_immunities,
        condition_immunities,
        senses,
        special_abilities,
        actions,
    } = details;

    const { walk, fly, swim } = speed;

    return (
        <div className="beast-details">
            <h2>{name}</h2>

            <div className="beast-details-stats">
                <p>
                    <strong>Size: </strong>
                    <span>{size}</span>
                </p>
                <p>
                    <strong>Armor Class: </strong>
                    <span>{armor_class}</span>
                </p>
                <p>
                    <strong>Hit Points: </strong>
                    <span>{hit_points}</span>
                </p>
                <p>
                    <strong>Speed: </strong>
                    <span>{walk} walking</span>
                    { swim && <span>{swim} swimming</span> }
                    { fly && <span>{swim} flying</span> }
                </p>
                <p>
                    <strong>Strength: </strong>
                    <span>{strength}</span>
                </p>
                <p>
                    <strong>Dexterity: </strong>
                    <span>{dexterity}</span>
                </p>
                <p>
                    <strong>Constitution: </strong>
                    <span>{constitution}</span>
                </p>
                <p>
                    <strong>Damage Resistances: </strong>
                    <span>{damage_resistances}</span>
                </p>
                <p>
                    <strong>Damage Vulnerabilities: </strong>
                    <span>{damage_vulnerabilities}</span>
                </p>
                <p>
                    <strong>Damage Immunities: </strong>
                    <span>{damage_immunities}</span>
                </p>
                <p>
                    <strong>Condition Immunities: </strong>
                    <span>{condition_immunities}</span>
                </p>
                <p>
                    <strong>Senses: </strong>
                    <span>{senses}</span>
                </p>
                <SpecialAbilityDetail specialAbilities={special_abilities} />
                <ActionDetails actions={actions} />
            </div>
        </div>
    );
};

export default BeastDetails;