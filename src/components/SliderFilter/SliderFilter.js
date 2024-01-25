// Modules
import React, { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Styles
import './SliderFilter.sass'

// Components
import { Cell } from 'react-foundation';

const SliderFilter = (props) => {
    const {
        large,
        medium,
        marks,
        maxValue,
        minValue,
        marksValues,
        title
    } = props;
    const [newValue, setValue] = useState(maxValue)
    const handleChange = (newValue) => {
        console.log(marksValues)
        setValue(newValue);
    }


    console.log(props);

    return (
        <Cell className="slider-filter hide-for-small-only" large={large} medium={medium}>
            <p>{title}</p>
            <Slider 
            min={minValue}
            max={maxValue}
            defaultValue={maxValue}
            steps={ null }
            marks={ marks }
            dots={true}
            onChange={(newValue) => {handleChange(newValue)}}/>
            <p className='subtitle'>Até {marksValues[newValue].label}</p>
        </Cell>
    )
}

export default SliderFilter

