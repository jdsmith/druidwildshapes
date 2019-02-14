import React from 'react';
import SpecialAbilityDetail from './SpecialAbilityDetail';
import ActionDetails from './ActionDetails';

const BeastDetails = ({details}) => (
    <div className="beast-details">
        <h2>{details.name}</h2>

        <div className="beast-details-stats">
            <p>
                <strong>Size: </strong>
                <span>{details.size}</span>
            </p>
            <p>
                <strong>Armor Class: </strong>
                <span>{details.armor_class}</span>
            </p>
            <p>
                <strong>Hit Points: </strong>
                <span>{details.hitpoints}</span>
            </p>
            <p>
                <strong>Speed: </strong>
                <span>{details.speed}</span>
            </p>
            <p>
                <strong>Strength: </strong>
                <span>{details.strength}</span>
            </p>
            <p>
                <strong>Dexterity: </strong>
                <span>{details.dexterity}</span>
            </p>
            <p>
                <strong>Constitution: </strong>
                <span>{details.constitution}</span>
            </p>
            <p>
                <strong>Damage Resistances: </strong>
                <span>{details.damage_resistances}</span>
            </p>
            <p>
                <strong>Damage Vulnerabilities: </strong>
                <span>{details.damage_vulnerabilities}</span>
            </p>
            <p>
                <strong>Damage Immunities: </strong>
                <span>{details.damage_immunities}</span>
            </p>
            <p>
                <strong>Condition Immunities: </strong>
                <span>{details.condition_immunities}</span>
            </p>
            <p>
                <strong>Senses: </strong>
                <span>{details.senses}</span>
            </p>
            <p>
                <strong>Speed: </strong>
                <span>{details.speed}</span>
            </p>
            <SpecialAbilityDetail specialAbilities={details.special_abilities} />
            <ActionDetails actions={details.actions} />
        </div>
    </div>
)

export default BeastDetails;