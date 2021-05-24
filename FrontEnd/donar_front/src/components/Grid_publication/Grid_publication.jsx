import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '200px',
    },
    
  }));
  
  export default function Grid_publication() {
    const classes = useStyles();
  
    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Publicación</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Publicación</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Publicación</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Publicación</Paper>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          
        </Grid>

        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" >
            <Button p={1} bgcolor="grey.300" variant="contained" color="primary" >
                Ver más
                
                <KeyboardArrowDownIcon />
            </Button>
        </Box>
      </div>
    );
  }