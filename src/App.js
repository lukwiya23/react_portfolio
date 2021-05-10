import AboutUs from './pages/AboutUs'
import GlobalStyle from './components/GlobalStyles'
import './App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <GlobalStyle />
      < AboutUs  />
    </div>
  );
}

export default App;
