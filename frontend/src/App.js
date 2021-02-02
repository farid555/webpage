import React from 'react'
import Nav from './Nav'
import AboutUs from './components/AboutUs'
import AddInfo from './components/AddInfo'
import Cards from './components/Cards'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/addinfo" component={AddInfo} />
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Cards />

  </div>
)
export default App;
