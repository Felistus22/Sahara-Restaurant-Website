import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Cart from './components/Cart'
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Menu' exact component={Menu}/>
          <Route path='/About' exact component={About}/>
          <Route path='/Contact' exact component={Contact}/>
          <Route path='/Cart' exact component={Cart}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
