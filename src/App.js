import './App.css';
import GoTop from './Components/Go__top';
import Navigation from './Components/Navigation';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Home />
        <About />
        <Services />
        <Contact />
        <GoTop />
    </div>
  );
}

export default App;
