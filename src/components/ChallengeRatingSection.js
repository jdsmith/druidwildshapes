import React, { useEffect, useState } from 'react';
import { getWildShapes } from '../api/open5eApi';
import WildShapeList from './WildShapeList';


export const ChallengeRatingSection = ({ challengeRating = null, canSwim = false, canFly = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [beastList, setBeastList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const filterSwimmingAndFlying = (list) => (
        list.filter(beast => {
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
        if (!beastList.length && challengeRating != null) {
            getWildShapes(challengeRating).then((list) => {
                setBeastList(filterSwimmingAndFlying(list));
                setErrorMessage('');
            }).catch((error) => {
                console.error(error);
                setErrorMessage('Something went wrong while retrieving these beasts. Please try again later.');
            });
        }
    }, []);

    return (
        <section className="challenge-rating-section">
            <h3 onClick={() => setIsExpanded(!isExpanded)}>Challenge Rating {challengeRating} ({beastList.length})</h3>
            <div className={`challenge-rating-body show-${isExpanded}`}>
                <WildShapeList wildShapes={beastList} />
                {errorMessage && <span class="error">{errorMessage}</span>}
            </div>
        </section>
    )
};

export default ChallengeRatingSection;