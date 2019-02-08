import React from 'react';
import Axios from 'axios';
import DruidForm from './DruidForm';
import WildShapeList from './WildShapeList';

class DruidContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wildShapes: []
        }
        this.onLevelChange = this.onLevelChange.bind(this);
        this.toggleCircleOfTheMoon = this.toggleCircleOfTheMoon.bind(this);
    }

    fetchWildShapes(level, isCircleOfTheMoon) {
        return Axios.get(`/api/wildshapes/${level}`, {
            params: {
                isCircleOfTheMoon
            }
        })
        .then(response => response.data)
        .then(wildShapes => this.setState({
            wildShapes: wildShapes
        }))
        .catch(error => console.error(error));
    }

    onLevelChange(event) {
        const level = event.target.value;
        const isCircleOfTheMoon = this.state.isCircleOfTheMoon;
        this.setState({
            level
        });
        this.fetchWildShapes(level, isCircleOfTheMoon);
    }

    toggleCircleOfTheMoon(event) {
        const level = this.state.level;
        const isCircleOfTheMoon = event.target.value;
        this.setState({
            isCircleOfTheMoon
        });
        this.fetchWildShapes(level, isCircleOfTheMoon);
    }

    render() {
        return (
            <div>
                <DruidForm 
                    onLevelChange={this.onLevelChange} 
                    toggleCircleOfTheMoon={this.toggleCircleOfTheMoon} />
                <WildShapeList wildShapes={this.state.wildShapes} />
            </div>
        );
    }
}

export default DruidContainer;