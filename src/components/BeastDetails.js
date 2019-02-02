import React from 'react';
import SpecialAbilityDetail from './SpecialAbilityDetail';
import ActionDetails from './ActionDetails';

const BeastDetails = ({details}) => (
    <div>
        <h1>{details.name}</h1>
        <p>
            <em>Size: </em>
            <span>{details.size}</span>
        </p>
        <p>
            <em>Armor Class: </em>
            <span>{details.armor_class}</span>
        </p>
        <p>
            <em>Hit Points: </em>
            <span>{details.hitpoints}</span>
        </p>
        <p>
            <em>Speed: </em>
            <span>{details.speed}</span>
        </p>
        <p>
            <em>Strength: </em>
            <span>{details.strength}</span>
        </p>
        <p>
            <em>Dexterity: </em>
            <span>{details.dexterity}</span>
        </p>
        <p>
            <em>Constitution: </em>
            <span>{details.constitution}</span>
        </p>
        <p>
            <em>Damage Resistances: </em>
            <span>{details.damage_resistances}</span>
        </p>
        <p>
            <em>Damage Vulnerabilities: </em>
            <span>{details.damage_vulnerabilities}</span>
        </p>
        <p>
            <em>Damage Immunities: </em>
            <span>{details.damage_immunities}</span>
        </p>
        <p>
            <em>Condition Immunities: </em>
            <span>{details.condition_immunities}</span>
        </p>
        <p>
            <em>Senses: </em>
            <span>{details.senses}</span>
        </p>
        <p>
            <em>Speed: </em>
            <span>{details.speed}</span>
        </p>
        <SpecialAbilityDetail specialAbilities={details.special_abilities} />
        <ActionDetails actions={details.actions} />
    </div>
)

export default BeastDetails;