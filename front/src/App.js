// import logo from './logo.svg';
// import { Carousel } from './components/Carousel/Carousel';
// import { Home } from './components/Home';
// import { Login } from './components/Login';
// import { Register } from './components/Register';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { UserContext } from './context/UserContext';

function App() {

  const [user, setUser] = useState({
    logged:false,
    role: ''
  });

  console.log('user logged:', user.logged); // Debugging

  return (
    <>

      <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Routes>
        {
          user.logged ? ( // conditional, first line below executes when True
            <Route path="/*" element={<PrivateRoutes />} />
          ):( // this structure "):("= else
            <Route path="/*" element={<PublicRoutes />} />
          )
        }
      </Routes>
      </UserContext.Provider>

    </>
  );
}

export default App;

      // {/* <Navbar/>
      // {/* <Carousel
      //   first_carousel_imagen = 'zamora_patient_real.png' 
      //   second_carousel_imagen = 'another_real_zamora_patient.png' 
      //   third_carousel_imagen = 'actual_zamora_patient.png' 
      // /> */}
      // <Routes>
      //   <Route exact path='/' element={ <Home/> }/>
      //   <Route exact path='/home' element={ <Home/> }/>
      //   <Route exact path='/login' element={ <Login/> }/>
      //   <Route exact path='/register' element={ <Register/> }/>

      //   <Route exact path='*' element={ <Login/> }/>
      // </Routes> */}