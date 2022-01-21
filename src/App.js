import './App.css';
import { ContactUs } from './contact';
import Footer from './Footer';
import Intro from './Intro';
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
