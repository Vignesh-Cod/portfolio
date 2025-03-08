import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Project from './component/Project';
import Resume from './component/Resume';
import About from './component/about';
import Contact from './component/Contact';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Project/>
     <Resume/>
     <Contact/>
     <Footer/>
     
    </div>
  );
}

export default App;
