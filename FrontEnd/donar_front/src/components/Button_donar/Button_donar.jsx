import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const Button_donar = () => {
    return (
        <div>
            <Button p={1} bgcolor="grey.300" variant="contained" color="primary">
                <Link to="/registro" >
                  Publicar Donación
                </Link>
              </Button>
        </div>
    )
}

export default Button_donar
