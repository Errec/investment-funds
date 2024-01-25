// Modules
import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider';

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
        subtitlePrefix,
        subtitleSuffix,
        title
    } = props;

    const [value, setValue] = useState(maxValue)
    const handleChange = (value) => {
        setValue(value);
    }

    return (
        <Cell className="slider-filter hide-for-small-only" large={large} medium={medium}>
            <p>{title}</p>
            <Slider
              step={null}
              defaultValue={maxValue}
              valueLabelDisplay="off"
              marks={marks}
              onChange={(e, value) => handleChange(value)}
            />
            <p className='subtitle'>{subtitlePrefix}{value}{subtitleSuffix}</p>
        </Cell>
    )
}

export default SliderFilter

