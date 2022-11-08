import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Logo from './componentes/Logo';
import Registro from './componentes/Registro';
import Login from './componentes/Login';
import RecoverPass from './componentes/RecoverPass';
import ResetPass from './componentes/ResetPass';
import Loading from './componentes/Loading';
import Logged from './componentes/Logged';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Logo />
        <Routes>
          <Route path='/' element={<Registro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recover' element={<RecoverPass />} />
          <Route path='/reset' element={<ResetPass />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/logged' element={<Logged />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
