import React from 'react';
import { useState } from 'react';
import { Header } from './Component/Header';
import Profile from './Component/Profile';
import AboutMe from './Component/Aboutme';
import Portofolio from './Component/Portofolio';

const App = function app() {
  const [count, setcount] = useState(0)
  return (
    <>
      <Header />
      <Profile />
      <AboutMe />
      <Portofolio />
    </>
  )
}

export default App