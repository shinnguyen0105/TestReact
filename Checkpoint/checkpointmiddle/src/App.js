import './App.css';
import Home from './pages/Home';
import { Navbar, NavbarBrand, Nav, Button } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DetailSong from './pages/DetailSong';
import Add from './pages/Add';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar color='light' light expand='md'>
          <Link to='/songs'>
            <NavbarBrand>HOME Music</NavbarBrand>
          </Link>
          <Nav className='mr-auto' navbar></Nav>
          <Link to='/add'>
            <Button color='primary'>Add new song</Button>
          </Link>
        </Navbar>
        <Switch>
          <Route exact path='/songs' component={Home} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/songs/:id' component={DetailSong} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
