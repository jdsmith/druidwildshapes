import React from 'react';

const DruidForm = ({onLevelChange, toggleCircleOfTheMoon}) => (
    <form name="druid-form">
    <fieldset>
        <span>Druid Level: </span>
        <input type="number" name="level" onChange={onLevelChange}/>
    </fieldset>
    <fieldset>
        <span>Circle of the Moon</span>
        <input type="checkbox" name="isCircleOfTheMoon" onChange={toggleCircleOfTheMoon}/>
    </fieldset>
    </form>
)

export default DruidForm;