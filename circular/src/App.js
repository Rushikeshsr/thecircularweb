import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Focus from './components/focus';
import HumanCapital from './components/humancapital';
import Health from './components/health';
import Partnerships from './components/partnerships';
import AboutUs from './components/aboutUs';
import Visionandmission from './components/visionandmission';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/focus" element={<Focus/>}/>
        <Route path="/humancapital" element={<HumanCapital/>}/>
        <Route path="/humancapital/health" element={<Health/>}/>
        <Route path="/partnerships" element={<Partnerships/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/aboutus/visionandmission" element={<Visionandmission/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
