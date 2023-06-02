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
import ContactUs from './components/contactUs';
import CircularEconomy from './components/circulareconomy';
import Nature from './components/nature';
import Medicine from './components/medicine';
import Hospitality from './components/hospitality';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hepatology from './components/hepatology';
import Gynaecology from './components/gynaecology';
import Desc from './components/desc';
import Smae from './components/smae';
import Caregood from './components/caregood';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/focus" element={<Focus/>}/>
        <Route path="/focus/circulareconomy" element={<CircularEconomy/>}/>
        <Route path="/focus/nature" element={<Nature/>}/>
        <Route path="/focus/medicine" element={<Medicine/>}/>
        <Route path="/focus/hospitality" element={<Hospitality/>}/>
        <Route path="/focus/hepatology" element={<Hepatology/>}/>
        <Route path="/focus/gynaecology" element={<Gynaecology/>}/>
        <Route path="/partnerships" element={<Partnerships/>}/>
        <Route path="/partnerships/desc" element={<Desc/>}/>
        <Route path="/partnerships/smae" element={<Smae/>}/>
        <Route path="/partnerships/caregood" element={<Caregood/>}/>
        <Route path="/humancapital" element={<HumanCapital/>}/>
        <Route path="/humancapital/health" element={<Health/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/aboutus/visionandmission" element={<Visionandmission/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        
      </Routes>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
