import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    const ChangeValueHandler = (event: Event, value: number | number[],  activeThumb: number,) => {
      props.onChange && props.onChange(event, value, activeThumb)
    }

    return (
        <Slider
            onChange={ChangeValueHandler}

            sx={{ // стили для слайдера // пишет студент

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
