import React from 'react'
import {Container, FormControl, InputLabel, Input, FormHelperText, Button, Grid} from '@material-ui/core';

const Form_registro = () => {

   

    return (
        <div>
            <h1>Formulario de registro</h1>
             <Container>
                <form action="hola.php" method="post" id="formulario">
                    <InputLabel htmlFor="email">Ingrese su Mail</InputLabel>
                    <Input id="email" type="email" aria-describedby="email-helper" />
                    <FormHelperText id="email-helper">Ingrese su mail </FormHelperText>

                    <InputLabel htmlFor="pwd">Ingrese su contraseña</InputLabel>
                    <Input id="pwd" type="password" aria-describedby="password-helper" />
                    <FormHelperText id="password-helper">Ingrese su pass</FormHelperText>

                    <Button variant="contained" color="primary" type="submit">
                        Inciar sesión
                    </Button>
                </form>

     

                {/* <Grid container>
                
                        <Grid item md={12}>
                            <FormControl >
                                <InputLabel htmlFor="email">Ingrese su Mail</InputLabel>
                                <Input id="email" type="email" aria-describedby="email-helper" />
                                <FormHelperText id="email-helper">Ingrese su mail </FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item md={12}>
                            <FormControl>
                                <InputLabel htmlFor="pwd">Ingrese su contraseña</InputLabel>
                                <Input id="pwd" type="password" aria-describedby="password-helper" />
                                <FormHelperText id="password-helper">Ingrese su pass</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item md={12} >
                            <Button variant="contained" color="primary" type="submit">
                                Inciar sesión
                            </Button>
                        </Grid>
                   
                </Grid> */}

             </Container>

        </div>
    )
}

export default Form_registro
