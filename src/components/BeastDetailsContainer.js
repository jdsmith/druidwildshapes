import React, { useEffect, useState } from 'react';
import { getWildShapeDetails } from '../api/open5eApi';
import BeastDetails from './BeastDetails';

const BeastDetailsContainer = ({ slug, onBeastSelect }) => {
    const [beastDetails, setBeastDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function retrieveAndSetDetails () {
            try {
                const details = await getWildShapeDetails(slug);
                setBeastDetails(details);
                setErrorMessage('');
            } catch (error) {
                setErrorMessage('We failed to retreive any details for this beast. Please try again later.');
            }
        }
        if(slug) {
            retrieveAndSetDetails();
        } else {
            setBeastDetails(null);
        }
    }, [slug]);

    if (errorMessage) {
        return <span>{errorMessage}</span>;
    }

    return beastDetails && <BeastDetails details={beastDetails} onBeastSelect={onBeastSelect} />;
};

export default BeastDetailsContainer;