import React, { useEffect, useState } from 'react';
import { getWildShapes } from '../api/open5eApi';
import WildShapeList from './WildShapeList';


export const ChallengeRatingSection = ({ challengeRating = null, canSwim = false, canFly = false , onBeastSelect}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [beastList, setBeastList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const filterSwimmingAndFlying = () => (
        beastList.filter(beast => {
            const { speed: { swim = null, fly = null } } = beast;
            if (swim && !canSwim) {
                return false;
            }
            if (fly && !canFly) {
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
        setBeastList(filterSwimmingAndFlying());
    }, [canFly, canSwim]);

    return (
        <section className="challenge-rating-section">
            <h3 onClick={() => setIsExpanded(!isExpanded)}>Challenge Rating {challengeRating} ({beastList.length})</h3>
            <div className={`challenge-rating-body show-${isExpanded}`}>
                <WildShapeList wildShapes={beastList} onBeastSelect={onBeastSelect}/>
                {errorMessage && <span class="error">{errorMessage}</span>}
            </div>
        </section>
    )
};

export default ChallengeRatingSection;