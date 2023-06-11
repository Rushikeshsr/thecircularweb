import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';

import Focus from './components/focus';
import CircularEconomy from './components/circulareconomy';
import Nature from './components/nature';
import Medicine from './components/medicine';
import Hospitality from './components/hospitality';
import Hepatology from './components/hepatology';
import Gynaecology from './components/gynaecology';

import Partnerships from './components/partnerships';
import Desc from './components/desc';
import Smae from './components/smae';
import Caregood from './components/caregood';
import Aranya from './components/aranya';
import Rer from './components/rer';
import Others from './components/others';

import HumanCapital from './components/humancapital';
import Education from './components/education';
import Skills from './components/skills';
import Health from './components/health';
import Quality from './components/quality';
import Transparency from './components/transparency';

import AboutUs from './components/aboutUs';
import Visionandmission from './components/visionandmission';
import Leadership from './components/leadership';
import Operations from './components/operations';
import Fieldtrips from './components/fieldtrips';
import Impact from './components/impact';

import ContactUs from './components/contactUs';
import AllPages from './components/pdfViewer';
import pdf1 from './resources/pdf1.pdf';
import pdf2 from './resources/pdf2.pdf';
import pdf3 from './resources/pdf3.pdf';
import may from './resources/may.pdf';
import TKHH_GREEN_CATEGORY_ABS from './resources/TKHH_GREEN_CATEGORY_ABS.xls';

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
        <Route path="/partnerships/aranya" element={<Aranya/>}/>
        <Route path="/partnerships/rer" element={<Rer/>}/>
        <Route path="/partnerships/others" element={<Others/>}/>

        <Route path="/humancapital" element={<HumanCapital/>}/>
        <Route path="/humancapital/education" element={<Education/>}/>
        <Route path="/humancapital/skills" element={<Skills/>}/>
        <Route path="/humancapital/health" element={<Health/>}/>
        <Route path="/humancapital/quality" element={<Quality/>}/>
        <Route path="/humancapital/transparency" element={<Transparency/>}/>

        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/aboutus/visionandmission" element={<Visionandmission/>}/>
        <Route path="/aboutus/leadership" element={<Leadership/>}/>
        <Route path="/aboutus/operations" element={<Operations/>}/>
        <Route path="/aboutus/fieldtrips" element={<Fieldtrips/>}/>
        <Route path="/aboutus/impact" element={<Impact/>}/>
        <Route path="/aboutus/impact/pdf1" element={<AllPages pdf={pdf1}/>}/>
        <Route path="/aboutus/impact/pdf2" element={<AllPages pdf={pdf2}/>}/>
        <Route path="/aboutus/impact/pdf3" element={<AllPages pdf={pdf3}/>}/>
        <Route path="/aboutus/impact/may" element={<AllPages pdf={may}/>}/>
        <Route path="/aboutus/impact/excel" element={<AllPages pdf={TKHH_GREEN_CATEGORY_ABS}/>}/>

        <Route path="/contactus" element={<ContactUs/>}/>
        
      </Routes>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
