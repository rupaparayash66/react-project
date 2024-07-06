import './App.css';
import Navbarc from './componets/Navbarc'
import Homec from './pages/Home';
import Aboutc from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Review from './pages/Review';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Latest from './pages/Latest';
import Surscribe from './pages/Surscribe';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

// import Slider1 from './pages/Slider1';

function App() {
  return (
    <>
      <Navbarc />
      <Homec />
      <Aboutc />
      <Service />
      <Team />
      <Review />
      <Portfolio />
      <Pricing />
      <Latest />
      <Surscribe />
      <Contact/>
      <Footer/>
      {/* <Slider1/> */}
    </>
  );
}

export default App;
