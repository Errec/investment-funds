// Modules
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Styles
import './RiskFilter.sass';

// Components
import { Cell } from 'react-foundation';

const RiskFilter = (props) => {
    const {
        large,
        medium,
        marks,
        maxValue,
        minValue,
        title,
        marksValues,
    } = props;
    const [newValue, setValue] = useState(maxValue)
    const handleChange = (newValue) => {
        setValue(newValue);
    }


    console.log(props);

    return (
        <Cell className="risk-filter hide-for-small-only" large={large} medium={medium}>
            <p>{title}</p>
            <div className="risk-filter__wrapper">
                <div className="risk-filter__filter">
                    <span>menor </span>
                    <Slider 
                    min={minValue}
                    max={maxValue}
                    defaultValue={maxValue}
                    steps={ null }
                    marks={ marks }
                    onChange={(newValue) => {handleChange(newValue)}}/>
                    <span> maior</span>
                </div>
                <div className="risk-filter__bars">
                    {marks.map((risk, index) =>(
                        <span style={{backgroundColor: marksValues[index].label, height: `${1.08 + (index * 0.13) }rem`}}></span>
                    ))}
                </div>
            </div>            
        </Cell>
    )
}

export default RiskFilter