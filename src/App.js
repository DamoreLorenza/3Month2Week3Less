
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import NavBarra from './components/nav';
import Section from './components/section';
import Potter from './components/potter';
import StarWars from './components/Millenium';
import Hunger from './components/HungerGames';
import Footer from './components/footer';
import SpiderMan from './components/provaCarosello';
import TvShow from './components/tvShows';
import Detail from './components/detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header" >
      <NavBarra/>
      <Routes>
        <Route element={<TvShow/>} path="/tvShows"/>
        <Route element={<Detail/>} path="/detail/:movie.imdbID"/>
      </Routes>
      </header>
      <Section/>
      <Potter/>
      <StarWars/>
      <Hunger/>
      <SpiderMan/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;


// key: ca6b81c6