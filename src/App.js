import AboutUs from './pages/AboutUs'
import GlobalStyle from './components/GlobalStyles'
import './App.css';
import NavBar from './components/NavBar'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import {Switch, Route} from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Switch>    
      <Route path="/" exact>
      < AboutUs  />
      </Route>
      <Route path="/work" >
      < OurWork  />
      </Route>
      <Route exact path="/work/:id">
        <MovieDetail />
      </Route>
      <Route path="/contact">
      < ContactUs  />
      </Route>
      </Switch>

    </div>
  );
}

export default App;
