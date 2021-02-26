import React, { useEffect, useState } from 'react';
import { getWildShapes } from '../api/open5eApi';
import WildShapeList from './WildShapeList';


export const ChallengeRatingSection = ({ challengeRating = null, druidLevel , onBeastSelect}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [beastList, setBeastList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const filterSwimmingAndFlying = (list = []) => (
        list.filter(beast => {
            const { speed: { swim = null, fly = null } } = beast;
            if (swim && druidLevel < 4) {
                return false;
            }
            if (fly && druidLevel < 8) {
                return false;
            }
            return true;
        })
    );

    useEffect(() => {
        async function fetchBeastList () {
            try {
                const list = await getWildShapes(challengeRating);
                setBeastList(list);
                setFilteredList(filterSwimmingAndFlying(list));
                setErrorMessage('');
            } catch (error) {
                setErrorMessage('Something went wrong while retrieving these beasts. Please try again later.');
            }
        }
        if (!beastList.length && challengeRating != null) {
            fetchBeastList();
        }
    }, []);

    useEffect(() => {
        if(beastList.length) {
            setFilteredList(filterSwimmingAndFlying(beastList));
        }
    }, [druidLevel]);

    return (
        <section className="challenge-rating-section">
            <h3 onClick={() => setIsExpanded(!isExpanded)}>Challenge Rating {challengeRating} ({filteredList.length})</h3>
            <div className={`challenge-rating-body show-${isExpanded}`}>
                <WildShapeList wildShapes={filteredList} onBeastSelect={onBeastSelect}/>
                {errorMessage && <span class="error">{errorMessage}</span>}
            </div>
        </section>
    )
};

export default ChallengeRatingSection;