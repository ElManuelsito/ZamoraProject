import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { Joke } from '../components/Joke/Joke';

export const PublicRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route exact path='/home' element={ <Home/> }/>
        <Route exact path='/login' element={ <Login/> }/>
        <Route exact path='/register' element={ <Register/> }/>
        <Route exact path='/about-us' element={ <Home/> }/>
        <Route exact path='/contact' element={ <Home/> }/>
        <Route exact path='/the-funny' element={ <Joke/> }/>
    
        <Route path='*' element={<Navigate to='/login' replace/>} />
    </Routes>
  )
}
