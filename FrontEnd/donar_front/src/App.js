import NavBar from './components/navBar/NavBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid_publication from './components/Grid_publication/Grid_publication';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form_registro from './components/Formulario_registro/Form_registro';


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/registro">
          <Form_registro />
        </Route>

        <Route path="/">
          <div className="App">
            <NavBar />
            
            <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" >
              <Button p={1} bgcolor="grey.300" variant="contained" color="primary">
                <Link to="/registro" >
                  Publicar Donación
                </Link>
              </Button>
            </Box>

            <Grid_publication />
            
          </div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
