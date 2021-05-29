import React, {useState} from 'react'
import {Container, FormControl, InputLabel, Input, FormHelperText, Button, Grid} from '@material-ui/core';

const Form_registro = () => {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    const handdleSubmit = async e => {
        // fetch o axios
        e.preventDefault()
        let form = document.getElementById('form_registro')
        // let form = document.getElementById('form_registro')
        // console.log(form)
        // console.log('hola');
        let data =  new FormData(form)
        data = JSON.stringify({email,password})
        console.log(data)
        await fetch('http://127.0.0.1:8000/api/register',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data,
            
        }) .then(datos => datos.json())                                                                                        
            .then(dataFormRegistro => {
                console.log(dataFormRegistro)
            })

            fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
        //TODO: FALTA TERMINAR EL ENVIO DEL FORMULARIO
        // try {
        //     let config = {
        //         method: 'POST',
        //         headers: {
        //             // 'Accept': 'application/json',
        //             // 'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({email, pass})
        //     }
            
        //     fetch('url', {
        //         config
        //     })

        //     console.log({email, pass})
        // } catch (error) {
            
        // }
    }

    return (
        <div>
            <h1>Formulario de registro</h1>
             <Container>
                <form onSubmit= {handdleSubmit} id="form_registro" >
                    <label > Email</label>
                    <input 
                        onChange = {({target : {value}}) => setEmail(value) } 
                        value = {email}
                        name = "correo"
                    />

                    <label > Password </label>
                    <input 
                        onChange = {({target : {value}}) => setPass(value) } 
                        value = {password}
                        name = "password"   
                    />
                    <input type="submit" value="submit"/>

                </form>

                <div>Form data: {JSON.stringify({email, pass: password})} </div>
                
                {/* <form action="hola.php" method="post" id="formulario">
                    <InputLabel htmlFor="email">Ingrese su Mail</InputLabel>
                    <Input id="email" type="email" aria-describedby="email-helper" />
                    <FormHelperText id="email-helper">Ingrese su mail </FormHelperText>

                    <InputLabel htmlFor="pwd">Ingrese su contraseña</InputLabel>
                    <Input id="pwd" type="password" aria-describedby="password-helper" />
                    <FormHelperText id="password-helper">Ingrese su pass</FormHelperText>

                    <Button variant="contained" color="primary" type="submit">
                        Inciar sesión
                    </Button>
                </form> */}

     

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
