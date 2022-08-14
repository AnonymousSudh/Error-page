import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Error404 from './components/Error404';
import Home from './components/Home';

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Error404 />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>

    </BrowserRouter>
   


  
  );
}

export default App;
