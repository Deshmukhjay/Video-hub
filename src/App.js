import React from 'react';
import {Button} from '@chakra-ui/react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/videos' element={<Videos/>} ></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer/>
     </Router>
    );
}

export default App;
