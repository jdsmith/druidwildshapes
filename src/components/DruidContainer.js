import React, { useEffect, useState } from 'react';
import { getChallengeRatingsForLevel } from '../api/challengeRatings';
import ChallengeRatingSection from './ChallengeRatingSection';
import DruidForm from './DruidForm';
import BeastDetailsContainer from './BeastDetailsContainer';

const DruidContainer = () => {
    const [isCircleOfTheMoon, setIsCircleOfTheMoon] = useState(false);
    const [druidLevel, setDruidLevel] = useState(1);
    const [challengeRatingSections, setChallengeRatingSections] = useState([]);
    const [selectedBeastSlug, setSelectedBeastSlug] = useState('');

    const onBeastSelect = slug => setSelectedBeastSlug(slug);

    // update the max CR when level or circle of the moon changes,
    // and build the lists by CR
    useEffect(() => { 
        const sections = []
        const beastListProps = {
            druidLevel,
            onBeastSelect: onBeastSelect
        }
        const challengeRatings = getChallengeRatingsForLevel(druidLevel, isCircleOfTheMoon);
        for(let i=0; i<challengeRatings.length; i++) {
            const challengeRating = challengeRatings[i]
            sections.push(
                <ChallengeRatingSection
                    challengeRating={challengeRating}
                    key={challengeRating}
                    {...beastListProps}
                />
            );
        }
        setChallengeRatingSections(sections);
    }, [isCircleOfTheMoon, druidLevel]);

    return (
        <section id="druidContainer">
            <section id="beastSelection" className={!!selectedBeastSlug ? 'sm-hidden' : ''}>
                <DruidForm 
                    onLevelChange={level => setDruidLevel(level)} 
                    toggleCircleOfTheMoon={value => setIsCircleOfTheMoon(value)} />
                <div className='challenge-ratings'>
                    {challengeRatingSections}
                </div>
            </section>
            <BeastDetailsContainer slug={selectedBeastSlug} onBeastSelect={onBeastSelect} className={!selectedBeastSlug ? 'sm-hidden' : ''}/>
        </section>
    );
};

export default DruidContainer;