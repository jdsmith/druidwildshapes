import React from 'react';

const DruidForm = ({onLevelChange, toggleCircleOfTheMoon, toggleLimitSRD}) => (
    <form name="druid-form">
    <fieldset>
        <label for="level">Druid Level: </label>
        <input type="number" name="level" onChange={event => onLevelChange(event.target.value)}/>
    </fieldset>
    <fieldset>
        <label for="isCircleOfTheMoon">Circle of the Moon</label>
        <input type="checkbox" name="isCircleOfTheMoon" onChange={event => toggleCircleOfTheMoon(event.target.checked)}/>
    </fieldset>
    <fieldset>
        <label for="limitSRD">Only Include Beasts from Core Rules</label>
        <input type="checkbox" name="limitSRD" onChange={event => toggleLimitSRD(event.target.checked)}/>
    </fieldset>
    </form>
)

export default DruidForm;