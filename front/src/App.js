// import logo from './logo.svg';
import './App.css';
import { Carousel } from './components/Carousel/Carousel';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Carousel
        first_carousel_imagen = 'zamora_patient_real.png' 
        second_carousel_imagen = 'another_real_zamora_patient.png' 
        third_carousel_imagen = 'actual_zamora_patient.png' 
      />
      <Routes>
        <Route exact path='/home' element={ <Home/> }/>
        <Route exact path='/login' element={ <Login/> }/>
        <Route exact path='/register' element={ <Register/> }/>
      </Routes>
    </>
  );
}

export default App;
