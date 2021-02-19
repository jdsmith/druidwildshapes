import React, { useEffect, useState } from 'react';
import challengeRatings, { getChallengeRatingForLevel } from '../api/challengeRatings';
import ChallengeRatingSection from './ChallengeRatingSection';
import DruidForm from './DruidForm';
import BeastDetailsContainer from './BeastDetailsContainer';

const DruidContainer = () => {
    const [isCircleOfTheMoon, setIsCircleOfTheMoon] = useState(false);
    const [canSwim, setCanSwim] = useState(false);
    const [canFly, setCanFly] = useState(false);
    const [maxCR, setMaxCR] = useState(null);
    const [druidLevel, setDruidLevel] = useState(1);
    const [challengeRatingSections, setChallengeRatingSections] = useState([]);
    const [selectedBeastSlug, setSelectedBeastSlug] = useState('');

    const onBeastSelect = slug => setSelectedBeastSlug(slug);

    // update the max CR when level or circle of the moon changes
    useEffect(() => {
        setCanSwim(druidLevel > 3);
        setCanFly(druidLevel > 7);
        if (isCircleOfTheMoon) {
            setMaxCR(druidLevel > 3 ? druidLevel / 3 : 1)
        } else {
            setMaxCR(getChallengeRatingForLevel(druidLevel));
        }
    }, [isCircleOfTheMoon, druidLevel])

    // update the displayed challenge ratings when maxCr changes
    useEffect(() => {
        const sections = []
        const beastListProps = {
            canFly,
            canSwim,
            onBeastSelect: onBeastSelect
        }
        for(let i=0; i<challengeRatings.length; i++) {
            const challengeRating = challengeRatings[i]
            sections.push(
                <ChallengeRatingSection
                    challengeRating={challengeRating}
                    key={challengeRating}
                    {...beastListProps}
                />
            );
            if (challengeRating === maxCR) {
                break;
            }
        }

        // circle of the moon sections
        for(let i=2;  i <= Number(maxCR); i++) {
            sections.push(
                <ChallengeRatingSection
                    key={i}
                    challengeRating={i}
                    {...beastListProps}
                />
            );
        }
        setChallengeRatingSections(sections);
    }, [maxCR]);

    return (
        <section id="druidContainer">
            <section id="beastSelection" className={!!selectedBeastSlug ? 'sm-hidden' : ''}>
                <DruidForm 
                    onLevelChange={level => setDruidLevel(level)} 
                    toggleCircleOfTheMoon={value => setIsCircleOfTheMoon(value)} />
                <div className='challenge-ratings'>
                    {maxCR != null && challengeRatingSections}
                </div>
            </section>
            <BeastDetailsContainer slug={selectedBeastSlug} onBeastSelect={onBeastSelect} className={!selectedBeastSlug ? 'sm-hidden' : ''}/>
        </section>
    );
};

export default DruidContainer;