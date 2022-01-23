import './App.css';
import { ContactUs } from './contact';
import Footer from './Footer';
import Intro from './Intro';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Display from './Display'



function App() {
  return (
    <Router>
      <Header/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Display/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
