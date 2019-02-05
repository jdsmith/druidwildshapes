import React from 'react';
import axios from 'axios';
import BeastDetails from './BeastDetails';

const monsterApiUrl = '/wildshapes/';

class BeastDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.fetchBeastDetails = this.fetchBeastDetails.bind(this);
    }

    fetchBeastDetails(beastId) {
        const endpoint = `${monsterApiUrl}${beastId}/`;
        return axios.get(endpoint)
            .then(response => response.data)
            .then(beastDetails => this.setState({ beastDetails }))
            .catch(error => this.setState({error}));
    }

    componentDidMount() {
        const beastId = this.props.match.params.id;
        this.fetchBeastDetails(beastId);
    }

    render() {
        return <BeastDetails details={this.state.beastDetails} />
    }
}

export default BeastDetailsContainer;