// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route exact path='/home' element={ <Home/> }/>
        <Route exact path='/login' element={ <Login/> }/>
        <Route exact path='/register' element={ <Register/> }/>
      </Routes>
    </>
  );
}

export default App;
