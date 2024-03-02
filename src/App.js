import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App(){
  return (
    <div>
        <Header/>
        <Banner/>
        <About/>
        <Skills/>
        <Service/>
        <Contact/>
        <Footer/>
    </div>
  );
  }

export default App;
