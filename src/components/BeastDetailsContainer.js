import React, { useEffect, useState } from 'react';
import { getWildShapeDetails } from '../api/open5eApi';
import BeastDetails from './BeastDetails';

const BeastDetailsContainer = ({ match }) => {
    const { params = {} } = match;
    const { slug } = params;
    const [beastDetails, setBeastDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        try {
            setBeastDetails(getWildShapeDetails(slug));
            setErrorMessage('');
        } catch (e) {
            console.error(e);
            setErrorMessage('We failed to retreive any details for this beast. Please try again later.');
        }
    }, [])

    if (errorMessage) {
        return <span>{errorMessage}</span>;
    }

    return beastDetails ? <BeastDetails details={beastDetails} /> : 'Loading...';
};

export default BeastDetailsContainer;