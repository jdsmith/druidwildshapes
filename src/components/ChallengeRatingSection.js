import React, { useEffect, useState } from 'react';
import { getWildShapes } from '../api/open5eApi';


export const ChallengeRatingSection = ({ challengeRating }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [beastList, setBeastList] = useState(null);

    useEffect(() => {
        if (!beastList) {
            getWildShapes(challengeRating);
        }
    });

    return (
        <section className="challengeRatingSection">
            <h3>Challenge Rating {challengeRating}</h3>
            
        </section>
    )
};

export default ChallengeRatingSection;