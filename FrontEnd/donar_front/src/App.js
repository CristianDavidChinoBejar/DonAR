import './App.scss';
import NavBar from './components/navBar/NavBar';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Publication from './components/Publication/Publication';
import Grid_publication from './components/Grid_publication/Grid_publication';

// import Button_donar from './components/Button_donar/Button_donar';
import Button_donar from './components/Button_donar/Button_donar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form_registro from './components/Formulario_registro/Form_registro';



function App() {
  // const name_button = "Publicar Donación"
  return (
    <Router>
      <Switch>
        
        <Route path="/registro">
          <Form_registro />
        </Route>

        <Route path="/">
          <div className="App">
            <NavBar />

            <Link to="/registro" style={{ textDecoration: 'none' }}>
              <Button_donar nameButton = {"Publicar Donación"} />
            </Link>

            <Link to="/registro" style={{ textDecoration: 'none' }}>
              <Button_donar nameButton = {"Publicar Pedido"} />
            </Link>

            <Grid_publication />
          </div>
        </Route>
      </Switch>

    </Router>
    
  );
}

export default App;
