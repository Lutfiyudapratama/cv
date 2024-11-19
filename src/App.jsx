import React from 'react';
import { useState } from 'react';
import { Header } from './Component/Header';
import Profile from './Component/Profile';
import AboutMe from './Component/Aboutme';

const App = function app() {
  const [count, setcount] = useState(0)
  return (
    <>
      <Header />
      <Profile />
      <AboutMe />
    </>
  )
}

export default App