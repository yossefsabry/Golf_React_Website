import './App.css';
import Home from './Pages/Home/Home';
import EventDetails from './Pages/EventDetails/EventDetails';
import EventListing from './Pages/EventListing/EventListing';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 700 })
  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event-listing' element={<EventListing />} />
        <Route path='/event-details' element={<EventDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
