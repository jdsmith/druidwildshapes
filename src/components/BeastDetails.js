import React from 'react';
import SpecialAbilityDetail from './SpecialAbilityDetail';
import ActionDetails from './ActionDetails';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Resistances = ({
    damageResistances,
    damageVulnerabilities,
    damageImmunities,
    conditionImmunities,
}) => (
    <React.Fragment>
        <p>
            <strong>Damage Resistances: </strong>
            <span>{damageResistances || 'none'}</span>
        </p>
        <p>
            <strong>Damage Vulnerabilities: </strong>
            <span>{damageVulnerabilities || 'none'}</span>
        </p>
        <p>
            <strong>Damage Immunities: </strong>
            <span>{damageImmunities || 'none'}</span>
        </p>
        <p>
            <strong>Condition Immunities: </strong>
            <span>{conditionImmunities || 'none'}</span>
        </p>
    </React.Fragment>
);

const BeastDetails = ({ details, onBeastSelect }) => {
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
        document__title: sourceTitle,
        document__slug: sourceSlug,
    } = details;

    const { walk, fly, swim } = speed;
    const shouldShowResistances = damage_resistances || damage_vulnerabilities || damage_immunities || condition_immunities;

    return (
        <div className="beast-details">
            <button className="back-button" onClick={() => onBeastSelect('')}>
                <FontAwesomeIcon icon={faArrowLeft} />
                &nbsp;
                Back To Beasts
            </button>
            <h2>
                {name}
            </h2>
            <h3>Source: {sourceSlug === 'wotc-srd' ? 'Core Rules (SRD)' : sourceTitle} </h3>

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
                    <span>{walk} walking &nbsp;</span>
                    { swim && <span>{swim} swimming &nbsp;</span> }
                    { fly && <span>{fly} flying &nbsp;</span> }
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
                { shouldShowResistances && (
                    <Resistances 
                        damageImmunities={damage_immunities}
                        damageResistances={damage_resistances}
                        conditionImmunities={condition_immunities}
                        damageVulnerabilities={damage_vulnerabilities}
                    />
                )}
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