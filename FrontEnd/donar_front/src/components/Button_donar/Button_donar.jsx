import React from 'react'
import Button from '@material-ui/core/Button';

import '../../App'
import './Button_donar.scss'

const Button_donar = ({nameButton}) => {
    return (
        <Button p={1} bgcolor="grey.300" variant="contained" color="secondary" className="Button_donar">
            {nameButton}
        </Button>
    )
}

export default Button_donar
