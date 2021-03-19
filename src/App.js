import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { NavbarScreen } from './ui/NavbarScreen';
import { InicioScreen } from './components/InicioScreen';
import { NewsScreen } from './components/NewsScreen';
import { GastoComunScreen } from './components/GastoComunScreen';
import { FooterScreen } from './ui/FooterScreen';
import TurnoAseoScreen from './components/TurnoAseoScreen';


const App = () => {
  return (
    <>
    <Router>   
        <NavbarScreen />  
        <TurnoAseoScreen/>                
        <Switch>  
          <Route exact path="/inicio" component={InicioScreen} />
          <Route exact path="/news" component={ NewsScreen } />
          <Route exact path="/gastoComun" component={ GastoComunScreen } />
          <Redirect to="/inicio" />
        </Switch>
      </Router>
      <FooterScreen />
    </>
  );
}

export default App;